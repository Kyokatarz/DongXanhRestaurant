import React, { useState } from 'react'
import {
  AppBar,
  createStyles,
  Hidden,
  makeStyles,
  Theme,
  Toolbar,
} from '@material-ui/core'

import NavbarLink from '../NavbarLink/'
import NavDrawerToggle from '../NavDrawerToggle/'
import NavDrawer from '../NavDrawer'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#121212',
    },
    toolBar: {
      backgroundColor: 'rgba(255, 255, 255, 0.12)',
      borderBottom: '4px solid #C22828',
    },
  })
)

const Navbar = () => {
  const classes = useStyles()

  const [navDrawer, setNavDrawer] = useState(false)
  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolBar}>
        <NavDrawerToggle setNavDrawer={setNavDrawer} />
        <NavDrawer open={navDrawer} setNavDrawer={setNavDrawer} />
        <NavbarLink />
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
