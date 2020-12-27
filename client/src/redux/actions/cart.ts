import { Dispatch } from 'react'

import { useUpdateCartItem } from '../../hooks/useUpdateCartItem'
import { CartActions, ItemInCart, UPDATE_CART } from '../../types'

export const updateCart = (newCart: ItemInCart[]): CartActions => {
  return { type: UPDATE_CART, payload: newCart }
}

//redux-thunk
export const addItemToCartAndSave = (
  inCartState: ItemInCart[],
  itemId: string
) => {
  return (dispatch: Dispatch<any>) => {
    const newCart = useUpdateCartItem(inCartState, itemId, 'add')
    localStorage.setItem('inCart', JSON.stringify(newCart))

    dispatch(updateCart(newCart))
  }
}

export const retrieveStorageAndSetCart = () => {
  return (dispatch: Dispatch<any>) => {
    const savedCart = localStorage.getItem('inCart')
    const newCart = (savedCart ? JSON.parse(savedCart) : []) as ItemInCart[]
    dispatch(updateCart(newCart))
  }
}
