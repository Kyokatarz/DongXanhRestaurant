import { Container } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'

import { RootState, UserState } from '../../types'
import AdminFunctionality from '../AdminFunctionality'
import AdminLoginPage from '../AdminLoginPage'

const AdminPage = () => {
  const user = useSelector<RootState, UserState>((state) => state.user)
  return (
    <Container>
      {!user.isLoggedIn && <AdminLoginPage />}
      {user.isAdmin && <AdminFunctionality />}
    </Container>
  )
}

export default AdminPage
