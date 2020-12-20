import { check } from 'express-validator'

import auth from './auth'

/*===============+
 |User validators|
 +===============*/
export const createUserValidator = [
  check('username', 'Username must be provided').not().isEmpty(),
  check('password', 'Password must be provided').not().isEmpty(),
  check('password', 'Password must be at least 8 characters long').isLength({
    min: 8,
  }),
  check('email', 'Email must be provided').not().isEmpty(),
  check('email', 'Please provide a valid email').isEmail(),
]

export const signInValidator = [
  check('email', 'Email must be provided').not().isEmpty(),
  check('email', 'Email is invalid').isEmail(),
  check('password', 'Password must be provided').not().isEmpty(),
]

/*==================+
 |Product validators|
 +==================*/
export const addProductValidatorWithAuth = [
  auth,
  check('name', 'Name must be provided.').not().isEmpty(),
  check('category', 'Category must be provided.').not().isEmpty(),
  check('price', 'Price must be provided.').not().isEmpty(),
]
