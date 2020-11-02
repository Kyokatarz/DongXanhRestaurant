import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'
import { PayloadType } from '../middlewares/auth'
import Product from '../models/Product'

import * as productService from '../services/product'

/***********************************
 * @ROUTE GET /v1/products/all     *
 * @DESC Get all products          *
 * @ACCESS PUBLIC                  *
 ***********************************/
export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await productService.getAllProducts()
    res.status(200).json(products)
  } catch (err) {
    next(productService.errorHandler(err))
  }
}

/***********************************
 * @ROUTE POST /v1/products/add    *
 * @DESC add a product             *
 * @ACCESS ADMIN                   *
 ***********************************/
export const addProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validationErrors = validationResult(req)
  try {
    if (!validationErrors.isEmpty()) throw 'ValidationError'
    const product = await productService.addProduct(
      req.body,
      (req.user! as PayloadType)._id
    )
    res.status(200).json(product)
  } catch (err) {
    next(productService.errorHandler(err, validationErrors))
  }
}

/*****************************************
 * @ROUTE PUT /v1/products/:productId    *
 * @DESC Edit a product                  *
 * @ACCESS ADMIN                         *
 *****************************************/
export const editProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await productService.editProduct(
      req.body,
      req.params.productId,
      (req.user as PayloadType)._id
    )
    res.status(200).json(product)
  } catch (err) {
    next(productService.errorHandler(err))
  }
}
