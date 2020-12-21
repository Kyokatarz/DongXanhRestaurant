import axios from 'axios'

import { host } from '../../App'

export const sendLogInRequest = (email: string, password: string) => {
  return async () => {
    const res = await axios.post(host + '/api/v1/users/signin', {
      email,
      password,
    })
    console.log(res.data)
  }
}
