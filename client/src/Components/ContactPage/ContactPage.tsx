import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
} from '@material-ui/core'
import React from 'react'

import Address from '../Address'
import Map from '../Map'
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
    title: {
      marginBottom: theme.spacing(2),
      color: theme.palette.primary.light,
    },
  })
)
const ContactPage = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Typography
        component="h1"
        variant="h3"
        align="center"
        className={classes.title}
      >
        Contact Us
      </Typography>
      <Grid container spacing={1} justify="center">
        <Grid item md={4} xs={12}>
          <OpeningHours />
        </Grid>
        <Grid item md={4} xs={12}>
          <Grid container direction="column">
            <Grid item md={12}>
              <Address />
            </Grid>
            <Grid item md={12}>
              <Map />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default ContactPage
