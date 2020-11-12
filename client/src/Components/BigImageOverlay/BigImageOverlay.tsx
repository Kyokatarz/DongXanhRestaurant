import React from 'react'
import {
  Container,
  Typography,
  Grid,
  Button,
  createStyles,
  makeStyles,
  Theme,
  Fade,
} from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'

type Props = {
  showOverlay: any
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    overlay: {
      [theme.breakpoints.down('xs')]: {
        height: '70%',
      },
      height: '40%',
      width: '100%',
      position: 'absolute',
      paddingTop: 10,
      bottom: 0,
      left: 0,
      zIndex: 3,
      background:
        'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.731608) 68.23%, rgba(0, 0, 0, 0.96875) 100%)',
    },
    description: {
      fontSize: 12,
      fontStyle: 'italic',
    },
    price: {
      marginTop: 10,
      fontSize: 20,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 5,
      right: 3,
    },
    button: {
      bottom: 5,
      margin: 3,
    },
    header: {
      textShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
    },
  })
)

const BigImageOverlay: React.FC<Props> = ({ showOverlay }) => {
  const classes = useStyles()

  return (
    <Fade in={showOverlay}>
      <Container className={classes.overlay}>
        <Typography variant="h5" component="header" className={classes.header}>
          Steamed Rice Rolls
        </Typography>
        <Typography variant="body1" className={classes.description}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
        </Typography>
        <Typography variant="body1" className={classes.price}></Typography>
        <Grid container justify="flex-end" className={classes.buttonContainer}>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              <InfoOutlinedIcon />
              Info
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              <AddShoppingCartIcon />
              VND 99,000
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Fade>
  )
}

export default BigImageOverlay
