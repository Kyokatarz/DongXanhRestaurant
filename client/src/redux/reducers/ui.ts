import { TOGGLE_ALL_ITEMS_LOADING, UIActions, UiState } from '../../types'

const defaultState: UiState = {
  allItemsLoading: true,
}

export default function ui(
  state: UiState = defaultState,
  action: UIActions
): UiState {
  switch (action.type) {
    case TOGGLE_ALL_ITEMS_LOADING: {
      return { ...state, allItemsLoading: false }
    }
    default:
      return state
  }
}
