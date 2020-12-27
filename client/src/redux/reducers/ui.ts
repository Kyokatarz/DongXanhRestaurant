import {
  TOGGLE_ALL_ITEMS_LOADING,
  TOGGLE_CART_DRAWER,
  UIActions,
  UiState,
} from '../../types'

const defaultState: UiState = {
  allItemsLoading: true,
  cartDrawer: false,
}

export default function ui(
  state: UiState = defaultState,
  action: UIActions
): UiState {
  switch (action.type) {
    case TOGGLE_ALL_ITEMS_LOADING: {
      return { ...state, allItemsLoading: false }
    }
    case TOGGLE_CART_DRAWER: {
      return { ...state, cartDrawer: !state.cartDrawer }
    }
    default:
      return state
  }
}
