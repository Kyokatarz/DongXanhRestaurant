import express from 'express'

import * as categoryController from '../controllers/category'
import { addNewCategoryWithAuth } from '../middlewares/validators'

//prefix /api/v1/category

const router = express.Router()

router.get('/all', categoryController.getAllCategories)
router.post('/', addNewCategoryWithAuth, categoryController.addNewCategory)

export default router
