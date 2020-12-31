import { UserState, LOG_USER_IN, UserActions } from '../../types'

const defaultState: UserState = {
  isLoggedIn: false,
  isAdmin: false,
  token: '',
}

export default function user(
  state: UserState = defaultState,
  action: UserActions
): UserState {
  switch (action.type) {
    case LOG_USER_IN: {
      console.log(action.payload)
      return {
        ...state,
        isLoggedIn: true,
        isAdmin: action.payload.isAdmin,
        token: action.payload.token,
      }
    }
    default:
      return state
  }
}
