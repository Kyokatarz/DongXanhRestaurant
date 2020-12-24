import {
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Button,
  Container,
  IconButton,
} from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import { Link } from 'react-router-dom'
import React from 'react'
import clsx from 'clsx'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    '@keyframes bounce': {
      '0%': {
        opacity: 0,
        transform: 'translateY(-50px)',
      },
      '100%': {
        opacity: 1,
        transform: 'translateY(0px)',
      },
    },
    container: {
      position: 'relative',
      marginBottom: theme.spacing(1),
      width: '100vw',
      height: '100vh',
    },
    img: {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    },
    center: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh ',
      flexDirection: 'column',
      justifyContent: 'space-around',
      padding: theme.spacing(1),
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    textContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    link: {
      color: 'inherit',
      textDecoration: 'none',
    },
    arrow: {
      bottom: '10%',
      fontSize: 60,
      animation: `$bounce 1500ms ${theme.transitions.easing.easeInOut} infinite alternate`,
    },
    button: {
      marginTop: theme.spacing(2),
    },
  })
)
const RestaurantLogoImage = () => {
  const classes = useStyles()

  return (
    <div className={clsx(classes.container)}>
      <img
        src="/Assets/HomePageImgs/restaurant_logo.jpg"
        className={classes.img}
        alt=""
      />
      <div className={clsx(classes.overlay, classes.center)}>
        <div></div>
        <Container className={clsx(classes.textContainer, classes.center)}>
          <Typography variant="h4" component="p" align="justify">
            Thưởng thức các món ăn hương rừng, vị biển
          </Typography>

          <Link to="/menu" className={classes.link}>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              size="large"
            >
              Xem thực đơn {'>'}
            </Button>
          </Link>
        </Container>
        <IconButton>
          <KeyboardArrowDownIcon className={classes.arrow} />
        </IconButton>
      </div>
    </div>
  )
}

export default RestaurantLogoImage
