import { check } from 'express-validator'

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
  check('username', 'Username must be provided').not().isEmpty(),
  check('password', 'Password must be provided').not().isEmpty(),
]

const addProductValidator = [
  check('name', 'Name must be provided.').not().isEmpty(),
  check('category', 'Category must be provided.').not().isEmpty(),
  check('price', 'Price must be provided.').not().isEmpty(),
]
