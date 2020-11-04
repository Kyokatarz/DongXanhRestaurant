//A product
export type Product = {
  name: string
  price: number
  category: string[]
  description?: string
}

//Actions name
export const FETCH_PRODUCT = 'FETCH_PRODUCT'
export const SET_PRODUCT = 'SET_PRODUCT'

//Actions:
export type setProductAction = {
  type: typeof SET_PRODUCT
  payload: Product[]
}

export type ProductAction = setProductAction

export type AppState = {
  products: Product[]
}
