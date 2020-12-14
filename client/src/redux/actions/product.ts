import { Dispatch } from 'redux'
import axios from 'axios'

import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  ProductActions,
  Product,
  SET_FILTERED_PRODUCT,
} from '../../types'
import { host } from '../../App'

export function addAllProducts(products: Product[]): ProductActions {
  return {
    type: ADD_PRODUCT,
    payload: {
      products,
    },
  }
}

export function setFilteredProducts(products: Product[]): ProductActions {
  return {
    type: SET_FILTERED_PRODUCT,
    payload: {
      filteredProducts: products,
    },
  }
}

export function removeProduct(product: Product): ProductActions {
  return {
    type: REMOVE_PRODUCT,
    payload: {
      product,
    },
  }
}

// Async action processed by redux-thunk middleware

export function fetchAllProducts() {
  return async (dispatch: Dispatch) => {
    const resp = await axios.get(host + '/api/v1/products/all')
    console.log(resp)
    dispatch(addAllProducts(resp.data))
    dispatch(setFilteredProducts(resp.data))
  }
}
