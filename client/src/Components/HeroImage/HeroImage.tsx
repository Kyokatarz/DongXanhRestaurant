import {
  Container,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heroImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    imgContainer: {
      width: '70vw',
      height: '30vh',
      marginTop: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      padding: 0,
    },
    imgOverlay: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,0.6)',
      textShadow: '4px 4px 3px rgba(0, 0, 0, 0.4)',
    },
  })
)

const HeroImage = () => {
  const classes = useStyles()
  return (
    <Container className={classes.imgContainer}>
      <img
        src="http://via.placeholder.com/400x200"
        alt=""
        className={classes.heroImg}
      />
      <Container className={classes.imgOverlay}>
        <Typography variant="h3" component="h1" color="primary">
          Menu
        </Typography>
      </Container>
    </Container>
  )
}

export default HeroImage
