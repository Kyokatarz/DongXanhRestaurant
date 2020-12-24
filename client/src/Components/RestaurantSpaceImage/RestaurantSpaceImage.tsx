import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
} from '@material-ui/core'
import React from 'react'
import clsx from 'clsx'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      position: 'relative',
      marginBottom: '100px',
      width: '100vw',
      height: '90vh',
    },
    img: {
      height: '100%',
      minHeight: '75vh',
      width: '100%',
      objectFit: 'cover',
      border: '1px solid grey',
    },
    descriptionContainer: {
      [theme.breakpoints.down('sm')]: {
        height: '45vh',
      },
      width: '100%',
      color: 'black',
      backgroundColor: '#E1D3B7',
      fontSize: '60px',
    },
    center: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
)

const RestaurantSpaceImage = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} md={6}>
        <img
          src="/Assets/HomePageImgs/open_space1.jpg"
          className={classes.img}
          alt=""
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        className={clsx(classes.descriptionContainer, classes.center)}
      >
        <Typography align="justify" variant="h5" component="p">
          Ẩm thực sân thượng <br />
          với không gian rộng rãi <br />
          thoáng mát
        </Typography>
      </Grid>
    </Grid>
  )
}

export default RestaurantSpaceImage
