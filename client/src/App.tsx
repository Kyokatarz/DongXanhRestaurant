import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core'
import React from 'react'
import Navbar from './Components/Navbar'

import Routes from './Routes'
import customTheme from './theme'

const theme = createMuiTheme(customTheme)

export default function App() {
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
