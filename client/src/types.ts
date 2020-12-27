// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const SET_ALL_CATEGORIES = 'SET_ALL_CATEGORIES'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'
export const TOGGLE_ALL_ITEMS_LOADING = 'TOGGLE_ALL_ITEMS_LOADING'

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

// A product
export type Category = { _id: string; name: string }
export type Product = {
  _id: string
  name: string
  price: number
  category: Category[]
  description?: string
}

export type AddAllProductsAction = {
  type: typeof ADD_PRODUCT
  payload: {
    products: Product[]
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

export type SetAllCategoriesAction = {
  type: typeof SET_ALL_CATEGORIES
  payload: {
    categories: Category[]
  }
}

//UI actions
export type ToggleAllItemsLoadingAction = {
  type: typeof TOGGLE_ALL_ITEMS_LOADING
}

// Use this union in reducer
export type ProductActions =
  | AddAllProductsAction
  | RemoveProductAction
  | SetAllCategoriesAction

export type ProductState = {
  allProducts: Product[]
  allCategories: Category[]
}

export type UIActions = ToggleAllItemsLoadingAction

export type UiState = {
  allItemsLoading: boolean
}

export type RootState = {
  product: ProductState
  ui: UiState
}
