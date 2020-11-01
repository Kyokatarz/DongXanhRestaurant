import express from 'express'

const router = express.Router()

//Prefix api/v1/products
router.get('/', (req, res) => {
  res.send('This is product route.')
})

export default router
