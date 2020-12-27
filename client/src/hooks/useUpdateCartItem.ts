import { ItemInCart } from '../types'

export const useUpdateCartItem = (
  array: ItemInCart[],
  itemId: string,
  modifier: 'add' | 'remove'
): ItemInCart[] => {
  const unrelatedItems = [...array].filter((item) => item._id !== itemId)
  const itemFoundInCart = [...array].find((item) => item._id === itemId)

  switch (modifier) {
    case 'add': {
      // If there is no associated item yet in cart, add a new one. Otherwise, modify the existing one.
      const updatedItem = itemFoundInCart
        ? { ...itemFoundInCart, quantity: itemFoundInCart.quantity + 1 }
        : { _id: itemId, quantity: 1 }
      return [...unrelatedItems, updatedItem]
    }

    case 'remove': {
      if (itemFoundInCart) {
        if (itemFoundInCart.quantity === 1) {
          //Item quantity === 1, just simply return the unrelated one (as it's removed)
          return [...unrelatedItems]
        } else {
          const updatedItem = {
            // else decrease by 1
            ...itemFoundInCart,
            quantity: itemFoundInCart.quantity - 1,
          }
          return [...unrelatedItems, updatedItem] as ItemInCart[] // and return the new array
        }
      } else return [...unrelatedItems]
    }
  }
}
