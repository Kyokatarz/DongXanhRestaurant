import { makeStyles, createStyles, Container } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { firstFetch } from '../../redux/actions'

import HeroImage from '../HeroImage'
import ProductContainer from '../ProductContainer'

const useStyles = makeStyles(() =>
  createStyles({
    bodyContainer: {
      marginTop: 65,
      borderWidth: 1,
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
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(firstFetch())
  }, [dispatch])

  return (
    <Container className={classes.bodyContainer}>
      <HeroImage />
      <ProductContainer />
    </Container>
  )
}

export default MenuPage
