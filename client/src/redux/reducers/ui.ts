import { UiState } from '../../types'

const defaultState: UiState = {
  allItemsLoading: true,
}

export default function ui(state: UiState = defaultState): UiState {
  return state
}
