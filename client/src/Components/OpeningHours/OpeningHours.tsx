import {
  Grid,
  Card,
  Typography,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'
import React from 'react'

const openHours = [
  {
    date: 'Monday',
    hours: '7 - 10',
  },
  {
    date: 'Tuesday',
    hours: '7 - 10',
  },
  {
    date: 'Wednesday',
    hours: '7 - 10',
  },
  {
    date: 'Thursday',
    hours: '7 - 10',
  },
  {
    date: 'Friday',
    hours: '7 - 10',
  },
  {
    date: 'Saturday',
    hours: '7 - 10',
  },
  {
    date: 'Sunday',
    hours: '7 - 10',
  },
]

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(3),
      minHeight: '50vh',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    title: {
      color: theme.palette.primary.light,
      paddingBottom: theme.spacing(2),
    },

    date: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
)

const OpeningHours = () => {
  const classes = useStyles()

  return (
    <Card className={classes.container}>
      <Typography variant="h4" component="h2" className={classes.title}>
        Opening Hours
      </Typography>

      <Grid container direction="column">
        {openHours.map((obj) => (
          <Grid item className={classes.date} key={obj.date}>
            <Typography variant="h6" component="p">
              {obj.date}
            </Typography>
            <Typography variant="h6" component="p">
              {obj.hours}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Card>
  )
}

export default OpeningHours
