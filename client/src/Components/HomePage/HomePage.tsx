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
import DailyFeatured from '../DailyFeatured/DailyFeatured'
import SmallImageContainer from '../SmallImageContainer'
import SmallCard from '../SmallCard'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bodyWrapper: {
      marginTop: 65,
      borderWidth: 1,
      border: '1px solid white',
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
          <Grid container className={classes.innerWrapper}>
            <Grid item>
              <DailyFeatured />
            </Grid>
            <Grid item>
              <SmallImageContainer />
            </Grid>
          </Grid>
        </Grid>

        <Container className={classes.buttonContainer}>
          <Button variant="contained" color="primary" size="large">
            Go To Menu {'>'}
          </Button>
        </Container>
      </Grid>
    </Container>
  )
}

export default HomePage
