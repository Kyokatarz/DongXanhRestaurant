import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import CartDrawer from './Components/CartDrawer'
import Navbar from './Components/Navbar'
import { firstFetch } from './redux/actions'
import Routes from './Routes'
import customTheme from './theme'

export const host =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://dongxanhrestaurant-server.herokuapp.com'

const theme = createMuiTheme(customTheme)

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(firstFetch())
  }, [dispatch])

  useEffect(() => {
    console.log(process.env)
  })
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Routes />
        <CartDrawer />
      </ThemeProvider>
    </>
  )
}
