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
import { Link } from 'react-router-dom'

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
    close: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    icon: {
      marginRight: 10,
      color: theme.palette.primary.light,
    },
    links: {
      color: 'inherit',
      textDecoration: 'none',
    },
  })
)

const NavDrawer: React.FC<NavDrawerProps> = ({ open, setNavDrawer }) => {
  const classes = useStyles()

  const renderList = [
    { icon: <Home className={classes.icon} />, text: 'Home', linkTo: '/' },
    {
      icon: <RestaurantMenu className={classes.icon} />,
      text: 'Menu',
      linkTo: '/menu',
    },
    {
      icon: <Phone className={classes.icon} />,
      text: 'Contact Us',
      linkTo: '/contact',
    },
  ]

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
        <ListItem button alignItems="center" className={classes.close}>
          <Close className={classes.icon} />
        </ListItem>
        <Divider />

        {renderList.map((item) => (
          <Link to={item.linkTo} className={classes.links} key={item.text}>
            <ListItem button alignItems="center">
              {item.icon}
              <ListItemText>{item.text}</ListItemText>
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  )
}

export default NavDrawer
