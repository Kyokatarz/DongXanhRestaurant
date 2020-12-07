import { makeStyles, Theme, createStyles, Container } from '@material-ui/core'
import React from 'react'

import HeroImage from '../HeroImage'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bodyContainer: {
      marginTop: 65,
      borderWidth: 1,
      border: '1px solid white',
      display: 'flex',
      minHeight: 'calc(100vh - 70px)',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
  })
)

const MenuPage = () => {
  const classes = useStyles()

  return (
    <Container className={classes.bodyContainer}>
      <HeroImage />
    </Container>
  )
}

export default MenuPage
