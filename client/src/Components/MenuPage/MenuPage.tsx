import { makeStyles, Theme, createStyles, Container } from '@material-ui/core'
import React from 'react'

import HeroImage from '../HeroImage'
import ProductContainer from '../ProductContainer'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bodyContainer: {
      width: '80vw',
      maxWidth: 'none',
      marginTop: 65,
      borderWidth: 1,
      border: '1px solid white',
      display: 'flex',
      flexDirection: 'column',
      minHeight: 'calc(100vh - 70px)',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
  })
)

const MenuPage = () => {
  const classes = useStyles()

  return (
    <Container className={classes.bodyContainer}>
      <HeroImage />
      <ProductContainer />
    </Container>
  )
}

export default MenuPage
