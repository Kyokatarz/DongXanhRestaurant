import * as yup from 'yup'

export const signInSchema = yup.object().shape({
  email: yup.string().email().required().min(5).max(255),
  password: yup.string().required().min(8).max(255),
})

export const addNewProductSchema = yup.object().shape({
  name: yup.string().required(),
  category: yup.string().required(),
  price: yup.number().required().required().min(0),
  description: yup.string().required(),
})
