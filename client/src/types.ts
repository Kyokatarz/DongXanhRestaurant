// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const SET_ALL_CATEGORIES = 'SET_ALL_CATEGORIES'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'

export const UPDATE_CART = 'UPDATE_CART'

export const TOGGLE_ALL_ITEMS_LOADING = 'TOGGLE_ALL_ITEMS_LOADING'
export const TOGGLE_CART_DRAWER = 'TOGGLE_CART_DRAWER'

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

// Product actions

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

//Item in cart type
export type ItemInCart = {
  _id: string
  name: string
  quantity: number
  price: number
}

//Cart actions
export type UpdateCartAction = {
  type: typeof UPDATE_CART
  payload: ItemInCart[]
}

//UI actions
export type ToggleAllItemsLoadingAction = {
  type: typeof TOGGLE_ALL_ITEMS_LOADING
}

export type ToggleCartDrawerAction = {
  type: typeof TOGGLE_CART_DRAWER
}

// Use this union in reducer
export type ProductActions =
  | AddAllProductsAction
  | RemoveProductAction
  | SetAllCategoriesAction

export type UIActions = ToggleAllItemsLoadingAction | ToggleCartDrawerAction

export type CartActions = UpdateCartAction

export type ProductState = {
  allProducts: Product[]
  allCategories: Category[]
}

export type CartState = {
  inCart: ItemInCart[]
}

export type UiState = {
  allItemsLoading: boolean
  cartDrawer: boolean
}

export type RootState = {
  product: ProductState
  ui: UiState
  cart: CartState
}
