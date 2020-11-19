import { createStyles, makeStyles, Theme } from '@material-ui/core'
import React, { useState } from 'react'
import InfoIcon from '@material-ui/icons/Info'
import CancelIcon from '@material-ui/icons/Cancel'
import SmallImageOverlay from '../SmallImageOverlay'

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
    showOverlayIcon: {
      position: 'absolute',
      right: 10,
      top: 10,
      cursor: 'pointer',
      color: theme.palette.secondary.dark,
    },
  })
)

const SmallCard = () => {
  const classes = useStyles()
  const [showOverlay, setShowOverlay] = useState(false)
  return (
    <div className={classes.imageContainer}>
      <img
        src="http://via.placeholder.com/240x240"
        className={classes.image}
        alt=""
      />
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
      <SmallImageOverlay showOverlay={showOverlay} />
    </div>
  )
}

export default SmallCard
