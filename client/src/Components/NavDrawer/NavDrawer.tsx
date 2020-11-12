import React from 'react'
import {
  createStyles,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Theme,
} from '@material-ui/core'
import { Home, RestaurantMenu, Phone, Close } from '@material-ui/icons'

type NavDrawerProps = {
  open: boolean
  setNavDrawer: any
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: '100vw',
      maxWidth: 260,
    },
    icon: {
      marginRight: 10,
      color: theme.palette.primary.light,
    },
  })
)

const NavDrawer: React.FC<NavDrawerProps> = ({ open, setNavDrawer }) => {
  const classes = useStyles()
  const list = ['Home', 'Menu', 'Contact Us']

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={() => setNavDrawer((prev: any) => !prev)}
    >
      <List
        component="nav"
        className={classes.drawer}
        onClick={() => setNavDrawer((prev: any) => !prev)}
      >
        <ListItem button alignItems="center">
          <Close className={classes.icon} />
        </ListItem>
        <Divider />
        <ListItem button alignItems="center">
          <Home className={classes.icon} />
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem button>
          <RestaurantMenu className={classes.icon} />
          <ListItemText>Menu</ListItemText>
        </ListItem>
        <ListItem button>
          <Phone className={classes.icon} />
          <ListItemText>Contact Us</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default NavDrawer
