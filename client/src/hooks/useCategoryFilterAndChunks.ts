import lodash from 'lodash'

import { Product } from '../types'

export default function (
  sourceArray: Product[],
  categoryArray: string[],
  numberOfChunks: number
) {
  const categoryFiltered = sourceArray.filter((productObj) =>
    categoryArray.some((category) =>
      productObj.category.map((catObj) => catObj.name).includes(category)
    )
  )

  return categoryArray.length > 0
    ? lodash.chunk(categoryFiltered, numberOfChunks) //return categoryFiltered if at least one category is checked
    : lodash.chunk(sourceArray, numberOfChunks) //return source array if none is checked
}
