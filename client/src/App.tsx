import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Navbar from './Components/Navbar'
import { firstFetch } from './redux/actions'
import Routes from './Routes'
import customTheme from './theme'

export const host =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : process.env['SERVER_URL'] //TODO: Add backend URL when deploy

const theme = createMuiTheme(customTheme)

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(firstFetch())
  }, [dispatch])

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Routes />
      </ThemeProvider>
    </>
  )
}
