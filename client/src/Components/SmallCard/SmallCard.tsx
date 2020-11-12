import { CardMedia, createStyles, makeStyles, Theme } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    imageContainer: {
      position: 'relative',
    },
    image: {
      display: 'block',
      height: 230,
      width: 230,
      maxWidth: '100%',
      maxHeight: '100%',
      zIndex: 2,
    },
  })
)

const SmallCard = () => {
  const classes = useStyles()
  return (
    <div className={classes.imageContainer}>
      <img src="http://via.placeholder.com/240x240" className={classes.image} />
    </div>
  )
}

export default SmallCard
