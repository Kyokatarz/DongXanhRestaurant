// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'
export const SET_FILTERED_PRODUCT = 'SET_FILTERED_PRODUCT'

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

// A product
export type Category = 'pork' | 'fish' | 'beef'
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

export type SetFilteredProducts = {
  type: typeof SET_FILTERED_PRODUCT
  payload: {
    filteredProducts: Product[]
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
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
  | SetFilteredProducts

export type ProductState = {
  allProducts: Product[]
  filteredProducts: Product[]
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
