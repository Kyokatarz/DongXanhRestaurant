import React from 'react'
import {
  Button,
  createMuiTheme,
  ThemeProvider,
  Card,
  Typography,
  CssBaseline,
  withStyles,
  AppBar,
  Toolbar,
} from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#C22828',
    },
  },
})

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
    </>
  )
}
