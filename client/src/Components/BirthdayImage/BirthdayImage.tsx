import {
  makeStyles,
  Theme,
  createStyles,
  Button,
  Container,
  Typography,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import React from 'react'
import clsx from 'clsx'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      position: 'relative',
      marginBottom: theme.spacing(1),
      width: '100vw',
      height: '60vh',
    },
    img: {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
      filter: 'blur(3px)',
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
      height: '100% ',
      flexDirection: 'column',
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
    button: {
      marginTop: theme.spacing(2),
    },
  })
)

const BirthdayImage = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <img
        src="/Assets/HomePageImgs/birthday_party.jpg"
        className={classes.img}
        alt=""
      />
      <div className={clsx(classes.overlay, classes.center)}>
        <div></div>
        <Container className={clsx(classes.textContainer, classes.center)}>
          <Typography variant="h4" component="p" align="justify">
            Nhận đặt tiệc sinh nhật, họp mặt, tất niên cuối năm,...
          </Typography>

          <Link to="/contact" className={classes.link}>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              size="large"
            >
              Đặt bàn ngay {'>'}
            </Button>
          </Link>
        </Container>
      </div>
    </div>
  )
}

export default BirthdayImage
