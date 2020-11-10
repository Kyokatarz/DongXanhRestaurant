import React from 'react'
import {
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
  ThemeOptions,
} from '@material-ui/core'

import customTheme from '../theme'
import Navbar from '../Components/Navbar/Navbar'

const theme = createMuiTheme(customTheme)

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
      </ThemeProvider>
    </>
  )
}
