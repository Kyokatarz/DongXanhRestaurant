import { Result, ValidationError } from 'express-validator'
import {
  NotFoundError,
  BadRequestError,
  InternalServerError,
  UnauthorizedError,
} from '../helpers/apiError'
import Product, { ProductDocument } from '../models/Product'
import User from '../models/User'
import stringifyError from '../util/stringifyError'

/*================+
 |Get all products|
 +================*/
export const getAllProducts = async (): Promise<ProductDocument[]> => {
  const products = await Product.find().exec()
  return products
}

/*=============+
 |Add a Product|
 +=============*/
export const addProduct = async (
  productObj: ProductDocument,
  userId: string
): Promise<ProductDocument> => {
  const user = await User.findById(userId)
  if (!user) throw 'NoUserFound'
  if (!user.isAdmin) throw 'NotAnAdmin'

  const { name, category, price, description } = productObj
  const product = new Product({
    name,
    category,
    price,
    description,
  })
  return await product.save()
}

/*==============+
 |Edit a product|
 +==============*/
export const editProduct = async (
  productObj: Partial<ProductDocument>,
  productId: string,
  userId: string
): Promise<ProductDocument> => {
  const user = await User.findById(userId)
  if (!user) throw 'UserNotFound'
  if (!user.isAdmin) throw 'NotAnAdmin'

  const product = await Product.findById(productId)
  if (!product) throw 'ProductNotFound'

  const { name, price, description, category } = productObj
  if (name) product.name = name
  if (price) product.price = price
  if (description) product.description = description
  if (category) product.category = category

  await product.save()
  return product
}

/*=============+
 |Error handler|
 +=============*/
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
    case 'ProductNotFound':
      return new NotFoundError('No product found with this Id', err)
    case 'NoUserFound':
      return new NotFoundError('No user found.')
    case 'NotAnAdmin':
      return new UnauthorizedError('You have no privillage to do this.')
    default:
      console.log(err)
      return new InternalServerError(err)
  }
}
