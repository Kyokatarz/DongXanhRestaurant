import React from 'react'
import {
  Button,
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import SmallImageContainer from '../SmallImageContainer'
import SmallCard from '../SmallCard'

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
        <Grid item>
          <Typography variant="h3" component="h1" className={classes.header}>
            Featured
          </Typography>
        </Grid>

        <Grid item>
          <Grid container className={classes.innerWrapper} spacing={1}>
            <Grid item xs={12}>
              <SmallCard />
            </Grid>
            <Grid item xs={12}>
              <SmallImageContainer />
            </Grid>
          </Grid>
        </Grid>

        <Container className={classes.buttonContainer}>
          <Link to="/menu" className={classes.link}>
            <Button variant="contained" color="primary" size="large">
              Go To Menu {'>'}
            </Button>
          </Link>
        </Container>
      </Grid>
    </Container>
  )
}

export default HomePage
