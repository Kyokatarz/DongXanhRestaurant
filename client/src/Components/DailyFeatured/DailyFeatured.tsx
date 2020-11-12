import React, { useState } from 'react'
import {
  CardMedia,
  Container,
  createStyles,
  makeStyles,
  Paper,
  Theme,
} from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'
import CancelIcon from '@material-ui/icons/Cancel'

import BigImageOverlay from '../BigImageOverlay'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    imageContainer: {
      position: 'relative',
      padding: 5,
    },
    showOverlayIcon: {
      position: 'absolute',
      right: 10,
      top: 10,
      cursor: 'pointer',
      color: theme.palette.secondary.dark,
    },
    image: {
      display: 'block',
      width: 480,
      height: 'auto',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  })
)

const DailyFeatured = () => {
  const classes = useStyles()
  const [showOverlay, setShowOverlay] = useState(false)
  return (
    <div className={classes.imageContainer}>
      <img src="http://via.placeholder.com/400x400" className={classes.image} />
      {!showOverlay && (
        <InfoIcon
          className={classes.showOverlayIcon}
          onClick={() => setShowOverlay(true)}
        />
      )}
      {showOverlay && (
        <CancelIcon
          className={classes.showOverlayIcon}
          onClick={() => setShowOverlay(false)}
        />
      )}
      <BigImageOverlay showOverlay={showOverlay} />
    </div>
  )
}

export default DailyFeatured
