import { Dispatch } from 'redux'
import axios from 'axios'

import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  ProductActions,
  Product,
  Category,
  SET_ALL_CATEGORIES,
} from '../../types'
import { host } from '../../App'
import { toggleAllItemsLoading } from '.'

export function addAllProducts(products: Product[]): ProductActions {
  return {
    type: ADD_PRODUCT,
    payload: {
      products,
    },
  }
}

export function setAllCategories(categories: Category[]): ProductActions {
  return {
    type: SET_ALL_CATEGORIES,
    payload: {
      categories,
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
    dispatch(toggleAllItemsLoading())
    dispatch(addAllProducts(resp.data))
  }
}

export function fetchAllCategories() {
  return async (dispatch: Dispatch) => {
    const resp = await axios.get(host + '/api/v1/category/all')
    console.log(resp)
    dispatch(setAllCategories(resp.data))
  }
}

export function firstFetch() {
  return async (dispatch: Dispatch<any>) => {
    dispatch(fetchAllProducts())
    dispatch(fetchAllCategories())
  }
}
