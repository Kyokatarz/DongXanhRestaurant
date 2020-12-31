import { combineReducers } from 'redux'

import product from './product'
import ui from './ui'
import cart from './cart'
import user from './user'

const createRootReducer = () =>
  combineReducers({
    product,
    ui,
    cart,
    user,
  })

export default createRootReducer
