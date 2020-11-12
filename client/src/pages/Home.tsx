import React from 'react'
import {
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
  ThemeOptions,
} from '@material-ui/core'

import customTheme from '../theme'
import HomePage from '../Components/HomePage'

const theme = createMuiTheme(customTheme)

export default function Home() {
  return <HomePage />
}
