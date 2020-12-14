import {
  ProductState,
  ProductActions,
  ADD_PRODUCT,
  SET_FILTERED_PRODUCT,
} from '../../types'

const initState: ProductState = {
  allProducts: [],
  filteredProducts: [],
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
    case SET_FILTERED_PRODUCT: {
      const { filteredProducts } = action.payload
      return { ...state, filteredProducts: filteredProducts }
    }
    default:
      return state
  }
}
