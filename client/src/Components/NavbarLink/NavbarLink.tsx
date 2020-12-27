import {
  Grid,
  Hidden,
  Typography,
  makeStyles,
  createStyles,
} from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

import CartIcon from '../CartIcon'

const useStyles = makeStyles(() =>
  createStyles({
    links: {
      color: 'inherit',
      textDecoration: 'none',
    },
  })
)

const NavbarLink = () => {
  const classes = useStyles()
  return (
    <Grid
      container
      direction="row"
      className="NavbarLink"
      justify="flex-end"
      alignItems="center"
    >
      <Hidden xsDown>
        <Grid item sm={2} xs={3}>
          <Link to="/" className={classes.links}>
            <Typography variant="body1">Home</Typography>
          </Link>
        </Grid>
        <Grid item sm={2} xs={3}>
          <Link to="/menu" className={classes.links}>
            <Typography variant="body1">Menu</Typography>
          </Link>
        </Grid>
        <Grid item sm={2} xs={3}>
          <Link to="/contact" className={classes.links}>
            <Typography variant="body1">Contact Us</Typography>
          </Link>
        </Grid>
      </Hidden>
      <Grid item sm={2} xs={3}>
        <CartIcon />
      </Grid>
    </Grid>
  )
}

export default NavbarLink
