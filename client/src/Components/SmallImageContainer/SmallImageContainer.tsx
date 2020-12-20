import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme,
} from '@material-ui/core'
import React from 'react'

import SmallCard from '../SmallCard'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: 5,
    },
    row: {
      marginBottom: 5,
      justifyContent: 'center',
    },
    center: {},
  })
)
const SmallImageContainer = () => {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <Grid container>
        <Grid container spacing={1} className={classes.row}>
          <Grid item xs={12} sm={6}>
            <SmallCard />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SmallCard />
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={1} className={classes.row}>
        <Grid item xs={12} sm={6}>
          <SmallCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SmallCard />
        </Grid>
      </Grid>
    </Container>
  )
}

export default SmallImageContainer
