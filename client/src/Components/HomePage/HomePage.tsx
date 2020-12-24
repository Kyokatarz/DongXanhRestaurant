import React from 'react'
import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme,
} from '@material-ui/core'

import RestaurantLogoImage from '../RestaurantLogoImage'
import RestaurantSpaceImage from '../RestaurantSpaceImage'
import BirthdayImage from '../BirthdayImage'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bodyWrapper: {
      marginTop: 65,
      borderWidth: 1,
      display: 'flex',
      minHeight: 'calc(100vh - 70px)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentWrapper: {
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      width: 'auto',
      maxWidth: 'none',
    },
    header: {
      color: theme.palette.primary.light,
      marginBottom: theme.spacing(2),
    },
    innerWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
      },
      display: 'flex',
      justifyContent: 'flex-end',
    },
    link: {
      color: 'inherit',
      textDecoration: 'none',
    },
  })
)

const HomePage = () => {
  const classes = useStyles()
  return (
    <Container className={classes.bodyWrapper}>
      <Grid container className={classes.contentWrapper} direction="column">
        <Grid item xs={12}>
          <RestaurantLogoImage />
          <RestaurantSpaceImage />
          <BirthdayImage />
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomePage
