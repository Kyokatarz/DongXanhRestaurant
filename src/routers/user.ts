import express from 'express'

import * as validators from '../middlewares/validators'
import * as userController from '../controllers/user'

const router = express.Router()

//Prefix api/v1/users
router.get('/', (req, res) => {
  res.send('This is user route.')
})

router.post(
  '/register',
  validators.createUserValidator,
  userController.registerUser
)
export default router
