import { SET_PRODUCT, Product, ProductAction } from '../../types'

const initState: Product[] = []

export default function (state = initState, action: ProductAction): Product[] {
  switch (action.type) {
    case SET_PRODUCT:
      return [...action.payload]
    default:
      return state
  }
}
