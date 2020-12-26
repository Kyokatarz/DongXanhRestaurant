import {
  Card,
  CardContent,
  CardMedia,
  createStyles,
  Grid,
  makeStyles,
} from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import React from 'react'

const useStyles = makeStyles(() =>
  createStyles({
    imageSkeleton: {
      height: 140,
    },
  })
)

const LoadingCard = () => {
  const classes = useStyles()
  return (
    <Grid item xs={12} md={10} lg={5}>
      <Card>
        <CardMedia>
          <Skeleton variant="rect" className={classes.imageSkeleton} />
        </CardMedia>

        <CardContent>
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
        </CardContent>
      </Card>
    </Grid>
  )
}

export default LoadingCard
