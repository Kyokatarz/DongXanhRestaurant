import { combineReducers } from 'redux'

import product from './product'
import ui from './ui'
import cart from './cart'

const createRootReducer = () =>
  combineReducers({
    product,
    ui,
    cart,
  })

export default createRootReducer
