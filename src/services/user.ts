import { Result, ValidationError } from 'express-validator'
import bcrypt from 'bcrypt'

import {
  NotFoundError,
  BadRequestError,
  InternalServerError,
} from '../helpers/apiError'
import User, { UserDocument } from '../models/User'
import stringifyError from '../util/stringifyError'
import { createJwt } from '../util/jwtUtils'

/*=============+
 |Register User|
 +=============*/
export const registerUser = async (userObj: UserDocument) => {
  const { username, password, lastName, firstName, isAdmin, email } = userObj
  const user = await User.findOne({ $or: [{ username }, { email }] }).exec()
  if (user) throw 'IdentificationDuplicated'

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const newUser = new User({
    username,
    password: hashedPassword,
    lastName,
    firstName,
    isAdmin,
    email,
  })

  await newUser.save()
  const token = createJwt({ id: newUser._id })
  return token
}

/*=============+
 |Error Handler|
 +=============*/
export const errorHandler = (
  err: any,
  validationErrors?: Result<ValidationError>
) => {
  if (err.kind === 'ObjectId')
    return new NotFoundError('No user found with this Id')
  switch (err) {
    case 'ValidationError':
      return new BadRequestError(
        'Bad Request: ' + stringifyError(validationErrors!.array())
      )
    case 'IdentificationDuplicated':
      return new BadRequestError('Email or Username existed', err)
    case 'CredentialError':
      return new BadRequestError('Incorrect Username or Password', err)
    case 'ChangingPasswordError':
      return new BadRequestError('Incorrect Password')
    case 'UserNotFound':
      return new NotFoundError('No user found with this Id', err)
    case 'ResetTokenInvalid':
      return new BadRequestError('Reset token invalid or expired', err)
    default:
      console.log(err)
      return new InternalServerError(err)
  }
}
