import React from 'react'
import { Menu } from '@material-ui/icons'
import { Hidden, IconButton } from '@material-ui/core'

type DrawerToggleProps = {
  setNavDrawer: React.Dispatch<React.SetStateAction<boolean>>
}

const NavDrawerToggle: React.FC<DrawerToggleProps> = ({ setNavDrawer }) => {
  return (
    <Hidden smUp>
      <IconButton>
        <Menu onClick={() => setNavDrawer((prev) => !prev)} fontSize="large" />
      </IconButton>
    </Hidden>
  )
}

export default NavDrawerToggle
