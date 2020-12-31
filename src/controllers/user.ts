import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'
import * as userService from '../services/user'

/***********************************
 * @ROUTE POST /v1/users/register  *
 * @DESC Create New User           *
 * @ACCESS PUBLIC                  *
 ***********************************/
export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req)
  try {
    if (!errors.isEmpty()) throw 'ValidationError'
    const token = await userService.registerUser(req.body)
    res.status(200).json({ token })
  } catch (err) {
    next(userService.errorHandler(err, errors))
  }
}

/***********************************
 * @ROUTE POST /v1/users/signin    *
 * @DESC Sign user in              *
 * @ACCESS PUBLIC                  *
 ***********************************/
export const signUserIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req)
  try {
    if (!errors.isEmpty()) throw 'ValidationError'
    const user = await userService.signUserIn(req.body)
    res.status(200).json({ user })
  } catch (err) {
    next(userService.errorHandler(err, errors))
  }
}
