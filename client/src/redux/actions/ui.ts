import {
  TOGGLE_ALL_ITEMS_LOADING,
  TOGGLE_CART_DRAWER,
  UIActions,
} from '../../types'

export const toggleAllItemsLoading = (): UIActions => {
  return { type: TOGGLE_ALL_ITEMS_LOADING }
}

export const toggleCartDrawer = (): UIActions => {
  return { type: TOGGLE_CART_DRAWER }
}
