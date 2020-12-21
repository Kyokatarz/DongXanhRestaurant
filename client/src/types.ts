// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const SET_ALL_CATEGORIES = 'SET_ALL_CATEGORIES'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'

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
export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type UiActions = ToggleDialogAction

// Use this union in reducer
export type ProductActions =
  | AddAllProductsAction
  | RemoveProductAction
  | SetAllCategoriesAction

export type ProductState = {
  allProducts: Product[]
  allCategories: Category[]
}

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

export type RootState = {
  product: ProductState
  ui: UiState
}
