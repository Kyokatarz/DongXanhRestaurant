import React from 'react'
import { Pagination } from 'react-bootstrap'

type ProductPaginationTypes = {
  numberOfPages: number
  activePage: number
  setActivePage: () => void
}
const ProductPagination = () => {
  return <Pagination></Pagination>
}

export default ProductPagination
