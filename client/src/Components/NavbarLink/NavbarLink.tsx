import { Grid, Hidden, Typography } from '@material-ui/core'
import React from 'react'

const NavbarLink = () => {
  return (
    <Hidden xsDown>
      <Grid
        container
        direction="row"
        className="NavbarLink"
        justify="flex-end"
        alignItems="center"
      >
        <Grid item sm={2} xs={3}>
          <Typography component="body">Home</Typography>
        </Grid>
        <Grid item sm={2} xs={3}>
          <Typography component="body">Menu</Typography>
        </Grid>
        <Grid item sm={2} xs={3}>
          <Typography component="body">Contact Us</Typography>
        </Grid>
      </Grid>
    </Hidden>
  )
}

export default NavbarLink
