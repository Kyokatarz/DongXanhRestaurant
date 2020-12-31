import axios from 'axios'
import { Dispatch } from 'redux'
import { toast } from 'react-toastify'

import { host } from '../../App'
import { fetchAllCategories } from '.'

//Redux-thunk
export const addNewCategory = (categoryName: string, token: string) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      await axios.post(
        host + '/api/v1/category',
        { name: categoryName },
        { headers: { 'x-auth-token': token } }
      )
      toast.success('Thêm thể loại mới thành công')
      dispatch(fetchAllCategories())
    } catch (err) {
      toast.error(err.response.data.message)
    }
  }
}

export const addNewProduct = (
  token: string,
  product: {
    name: string
    categoryId: string
    description: string
    price: number
  }
) => {
  const { name, categoryId, description, price } = product
  return async () => {
    try {
      await axios.post(
        host + '/api/v1/products/add',
        {
          name: name,
          category: categoryId,
          description,
          price,
        },
        {
          headers: {
            'x-auth-token': token,
          },
        }
      )
      toast.success('Thêm món thành công')
    } catch (err) {
      toast.error(err.data.response.message)
    }
  }
}

export const deleteProduct = (token: string, productId: string) => {
  return async () => {
    try {
      await axios.delete(host + `/api/v1/products/${productId}`, {
        headers: { 'x-auth-token': token },
      })
      toast.success('Xóa món thành công')
    } catch (err) {
      console.log(err.response.data.message)
    }
  }
}
