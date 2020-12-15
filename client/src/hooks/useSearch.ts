import { Product } from '../types'
import useRemoveAccents from './useRemoveAccents'

export default function (productArray: Product[], searchValue: string) {
  const lowercaseSearchString = searchValue.toLowerCase()
  const removedAccentsSearchString = useRemoveAccents(lowercaseSearchString)
  return productArray.filter((product) => {
    const removedAccentsProductName = useRemoveAccents(product.name)
    return removedAccentsProductName
      .toLowerCase()
      .includes(removedAccentsSearchString)
  })
}
