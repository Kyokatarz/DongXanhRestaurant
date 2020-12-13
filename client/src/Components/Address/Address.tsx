import {
  Card,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import React from 'react'
import HouseIcon from '@material-ui/icons/House'
import PhoneIcon from '@material-ui/icons/Phone'
import FacebookIcon from '@material-ui/icons/Facebook'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(3),
    },
    title: {
      paddingBottom: theme.spacing(2),
      color: theme.palette.primary.light,
    },
    items: {
      paddingBottom: theme.spacing(1),
      paddingTop: theme.spacing(1),
    },
  })
)

const Address = () => {
  const classes = useStyles()
  return (
    <Card className={classes.container}>
      <Typography variant="h4" component="h2" className={classes.title}>
        Address
      </Typography>
      <Grid container className={classes.items}>
        <Grid item xs={2}>
          <HouseIcon />
        </Grid>
        <Grid item xs={9}>
          <Typography variant="body2" component="p">
            368 Dong Den Str. Tan Binh District Ho Chi Minh City
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.items}>
        <Grid item xs={2}>
          <PhoneIcon />
        </Grid>
        <Grid item xs={9}>
          <Typography variant="body2" component="p">
            Phone number
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.items}>
        <Grid item xs={2}>
          <FacebookIcon />
        </Grid>
        <Grid item xs={9}>
          <Typography variant="body2" component="p">
            Address address address
          </Typography>
        </Grid>
      </Grid>
    </Card>
  )
}

export default Address
