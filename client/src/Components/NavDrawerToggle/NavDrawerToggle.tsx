import React from 'react'
import { Menu } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'

type DrawerToggleProps = {
  setNavDrawer: React.Dispatch<React.SetStateAction<boolean>>
}

const NavDrawerToggle: React.FC<DrawerToggleProps> = ({ setNavDrawer }) => {
  return (
    <IconButton>
      <Menu onClick={() => setNavDrawer((prev) => !prev)} fontSize="large" />
    </IconButton>
  )
}

export default NavDrawerToggle
