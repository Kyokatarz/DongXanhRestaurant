import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
} from '@material-ui/core'
import React from 'react'

import Address from '../Address'
import OpeningHours from '../OpeningHours'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '90vh',
      padding: theme.spacing(4),
    },
  })
)
const ContactPage = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Typography component="h1" variant="h3" align="center">
        Contact Us
      </Typography>
      <Grid container spacing={1} justify="center">
        <Grid item md={4} xs={12}>
          <OpeningHours />
        </Grid>
        <Grid item md={4} xs={12}>
          <Address />
          <div>2</div>
        </Grid>
      </Grid>
    </div>
  )
}

export default ContactPage
