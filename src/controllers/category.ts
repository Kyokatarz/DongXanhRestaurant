import { NextFunction, Request, Response } from 'express'
import * as categoryService from '../services/category'

import Category from '../models/Category'
import { validationResult } from 'express-validator'
import { PayloadType } from '../middlewares/auth'

/***********************************
 * @ROUTE GET /v1/category/all     *
 * @DESC Get all categories        *
 * @ACCESS PUBLIC                  *
 ***********************************/
export const getAllCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await Category.find()
    res.status(200).json(categories)
  } catch (err) {
    next(categoryService.errorHandler(err))
  }
}

/***********************************
 * @ROUTE POST /v1/category/       *
 * @DESC Add a new category        *
 * @ACCESS ADMIN                   *
 ***********************************/
export const addNewCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validationErrors = validationResult(req)

  try {
    const { name } = req.body
    if (!validationErrors.isEmpty()) throw 'ValidationError'
    const product = await categoryService.addNewCategory(
      name,
      (req.user! as PayloadType)._id
    )
    res.status(200).json(product)
  } catch (err) {
    next(categoryService.errorHandler(err, validationErrors))
  }
}
