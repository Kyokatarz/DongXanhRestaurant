import { ProductState, ProductActions, ADD_PRODUCT } from '../../types'

const initState: ProductState = {
  allProducts: [],
}

export default function product(
  state = initState,
  action: ProductActions
): ProductState {
  switch (action.type) {
    case ADD_PRODUCT: {
      const { products } = action.payload
      return { ...state, allProducts: products }
    }
    default:
      return state
  }
}
