import { ItemInCart } from '../types'

export const useUpdateCartItem = (
  array: ItemInCart[],
  item: { _id: string; name: string; price: number },
  modifier: 'add' | 'remove'
): ItemInCart[] => {
  const unrelatedItems = [...array].filter((obj) => obj._id !== item._id)
  const itemFoundInCart = [...array].find((obj) => obj._id === item._id)

  switch (modifier) {
    case 'add': {
      // If there is no associated item yet in cart, add a new one. Otherwise, modify the existing one.
      if (itemFoundInCart) {
        const itemIndex = array.map((obj) => obj._id).indexOf(item._id)

        const updatedItem = {
          ...itemFoundInCart,
          quantity: itemFoundInCart.quantity + 1,
        }
        const tempArray = [...array]
        tempArray.splice(itemIndex, 1, updatedItem)
        return tempArray
      } else {
        console.log('Item not found')

        return [...unrelatedItems, { ...item, quantity: 1 }]
      }
    }

    case 'remove': {
      if (itemFoundInCart) {
        if (itemFoundInCart.quantity === 1) {
          //Item quantity === 1, just simply return the unrelated one (as it's removed)
          return [...unrelatedItems]
        } else {
          const itemIndex = array.map((obj) => obj._id).indexOf(item._id)
          const updatedItem = {
            // else decrease by 1
            ...itemFoundInCart,
            quantity: itemFoundInCart.quantity - 1,
          }
          const tempArray = [...array]
          tempArray.splice(itemIndex, 1, updatedItem)
          return tempArray // and return the new array
        }
      } else return [...unrelatedItems]
    }
  }
}
