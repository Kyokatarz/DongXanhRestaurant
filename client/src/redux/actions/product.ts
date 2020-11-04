import { Dispatch } from 'redux'
import axios from 'axios'
import { url } from '../../App'
import { Product, SET_PRODUCT } from '../../types'

export const setProducts = (products: Product[]) => {
  return {
    type: SET_PRODUCT,
    payload: products,
  }
}

//Redux thunk actions
export const fetchProducts = () => {
  return async (dispatch: Dispatch) => {
    try {
      const resp = await axios.get(url + '/api/v1/products/all')
      console.log(resp.data)
      dispatch(setProducts(resp.data))
    } catch (err) {
      console.error(err)
    }
  }
}
