import axios from 'axios'
import { Dispatch } from 'redux'
import { toast } from 'react-toastify'

import { host } from '../../App'
import { LOG_USER_IN, UserActions, UserState } from '../../types'

export const logUserIn = (user: UserState): UserActions => {
  return { type: LOG_USER_IN, payload: user }
}

//Redux-thunk
export const sendLogInRequest = (email: string, password: string) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const res = await axios.post(host + '/api/v1/users/signin', {
        email,
        password,
      })
      dispatch(logUserIn(res.data.user))
      toast.success('Đăng nhập thành công')
    } catch (err) {
      toast.error(err.response.data.message)
    }
  }
}
