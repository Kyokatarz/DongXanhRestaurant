import { createStyles, makeStyles, Theme } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 5,
    },
  })
)

const Map = () => {
  const classes = useStyles()
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href="https://www.google.com/maps/place/%C4%90%E1%BB%93ng+Xanh+qu%C3%A1n/@10.7882541,106.6428852,20.17z/data=!4m5!3m4!1s0x31752eb2475ef167:0xd9997888f6a2631c!8m2!3d10.7882363!4d106.6428403"
    >
      <img
        src="/map.png"
        className={classes.image}
        alt="Position on Google Maps"
      />
    </a>
  )
}

export default Map
