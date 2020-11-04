import { combineReducers } from 'redux'

import products from './product'

const createRootReducer = () =>
  combineReducers({
    products,
  })

export default createRootReducer
