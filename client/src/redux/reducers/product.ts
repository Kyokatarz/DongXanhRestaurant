import {
  ProductState,
  ProductActions,
  ADD_PRODUCT,
  SET_ALL_CATEGORIES,
} from '../../types'

const initState: ProductState = {
  allProducts: [],
  allCategories: [],
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
    case SET_ALL_CATEGORIES: {
      const { categories } = action.payload
      return { ...state, allCategories: categories }
    }
    default:
      return state
  }
}
