import lodash from 'lodash'

import { Category, Product } from '../types'

export default function (sourceArray: Product[], categoryArray: Category[]) {
  const numberOfChunks = 2
  const categoryFiltered = sourceArray.filter((object) =>
    categoryArray.some((elem) => object.category.includes(elem))
  )
  console.log('categoryFiltered', categoryFiltered)
  return categoryArray.length > 0
    ? lodash.chunk(categoryFiltered, numberOfChunks)
    : lodash.chunk(sourceArray, numberOfChunks)
}
