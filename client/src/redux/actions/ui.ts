import { TOGGLE_ALL_ITEMS_LOADING, UIActions } from '../../types'

export const toggleAllItemsLoading = (): UIActions => {
  return { type: TOGGLE_ALL_ITEMS_LOADING }
}
