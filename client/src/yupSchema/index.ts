import * as yup from 'yup'

export const signInSchema = yup.object().shape({
  email: yup.string().email().min(5).max(255),
  password: yup.string().min(8).max(255),
})
