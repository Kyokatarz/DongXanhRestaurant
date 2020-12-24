import { ThemeOptions } from '@material-ui/core'

const customTheme: ThemeOptions = {
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          overflowX: 'hidden',
        },
      },
    },
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#C22828',
    },
    secondary: {
      main: '#5FDEDE',
    },
    background: {
      default: '#121212',
    },
  },
  typography: {
    body1: {
      backgroundColor: 'inherit',
    },
  },
}

export default customTheme
