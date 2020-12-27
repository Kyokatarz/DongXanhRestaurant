import { CartActions, CartState, UPDATE_CART } from '../../types'

const defaultState = {
  inCart: [],
}

export default function cart(
  state: CartState = defaultState,
  action: CartActions
): CartState {
  switch (action.type) {
    case UPDATE_CART: {
      return { ...state, inCart: action.payload }
    }
    default:
      return state
  }
}
