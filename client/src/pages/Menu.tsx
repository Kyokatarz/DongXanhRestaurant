import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import MenuPage from '../components/MenuPage'
import { fetchProducts } from '../redux/actions/product'
import { AppState, Product } from '../types'

const Menu = () => {
  const products = useSelector<AppState, Product[]>((state) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(products)
    if (products.length === 0) {
      dispatch(fetchProducts())
    }
  })
  return <MenuPage />
}

export default Menu
