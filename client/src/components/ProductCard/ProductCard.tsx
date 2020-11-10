import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

import './ProductCard.scss'

type ProductCardProps = {
  name: string
  price: number
  category: string[]
  description: string | undefined
  _id: string
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  category,
  description,
  _id,
}) => {
  const categorySring = ''

  return (
    <article className="ProductCard">
      <Row lg="2">
        <Col>
          <div className="ProductCard__ImgContainer">
            <img src="http://via.placeholder.com/150x150" alt="Food" />
          </div>
        </Col>
        <Col>
          <div className="ProductCard__Info">
            <p className="ProductCard__Header">{name}</p>
            <p>{category.toString()}</p>
            <p>{description}</p>
            <Button>See more</Button>
          </div>
        </Col>
      </Row>
    </article>
  )
}

export default ProductCard
