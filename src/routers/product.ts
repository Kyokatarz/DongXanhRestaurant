import express from 'express'

import * as productController from '../controllers/product'
import auth from '../middlewares/auth'
import * as validators from '../middlewares/validators'

const router = express.Router()

//Prefix api/v1/products
router.get('/', (req, res) => {
  res.send('This is product route.')
})
router.get('/all', productController.getAllProducts)
router.post(
  '/add',
  validators.addProductValidatorWithAuth,
  productController.addProduct
)
router.put('/:productId', auth, productController.editProduct)
router.delete('/:productId', auth, productController.deleteProduct)
export default router
