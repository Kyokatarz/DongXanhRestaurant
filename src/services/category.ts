import { Result, ValidationError } from 'express-validator'

import {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
  InternalServerError,
} from '../helpers/apiError'
import Category, { CategoryDocument } from '../models/Category'
import User from '../models/User'
import stringifyError from '../util/stringifyError'

export const addNewCategory = async (
  name: string,
  userId: string
): Promise<CategoryDocument> => {
  const user = await User.findById(userId)
  if (!user) throw 'UserNotFound'
  if (!user.isAdmin) throw 'NotAnAdmin'

  const category = await Category.findOne({ name })
  if (category) throw 'CategoryExisted'

  const newCategory = new Category({ name })
  await newCategory.save()

  return newCategory
}

export const errorHandler = (
  err: any,
  validationErrors?: Result<ValidationError>
) => {
  if (err.kind === 'ObjectId')
    return new NotFoundError('No product found with this Id')
  switch (err) {
    case 'ValidationError':
      return new BadRequestError(
        'Bad Request: ' + stringifyError(validationErrors!.array())
      )
    case 'CategoryNotFound':
      return new NotFoundError('Nothing found with this Id', err)
    case 'CategoryExisted':
      return new BadRequestError('Category name existed')
    case 'NotAnAdmin':
      return new UnauthorizedError('You have no privillage to do this.')
    default:
      console.log(err)
      return new InternalServerError(err)
  }
}
