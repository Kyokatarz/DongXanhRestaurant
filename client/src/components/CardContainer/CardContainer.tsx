import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import { AppState, Product } from '../../types'
import ProductCard from '../ProductCard'
import ProductPagination from '../ProductPagination'
import './CardContainer.scss'

const CardContainer = () => {
  const products = useSelector<AppState, Product[]>((state) => state.products)
  return (
    <Container className="CardContainer">
      {products.map((prod) => (
        <ProductCard
          name={prod.name}
          price={prod.price}
          category={prod.category}
          description={prod.description}
          _id={prod._id}
          key={prod._id}
        />
      ))}
      <ProductPagination />
    </Container>
  )
}

export default CardContainer
