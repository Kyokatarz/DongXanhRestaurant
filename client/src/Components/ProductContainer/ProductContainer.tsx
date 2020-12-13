import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme,
} from '@material-ui/core'
import React from 'react'

import ProductShowCase from '../ProductShowCase'
import ProductSearchBar from '../ProductSearchBar'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    innerContainer: {
      border: '1px solid blue',
      marginTop: 10,
      padding: theme.spacing(2),
    },
  })
)

const ProductContainer = () => {
  const classes = useStyles()
  return (
    <Container className={classes.innerContainer}>
      <Grid container spacing={1} direction="row">
        <Grid item xs={12} md={4} lg={3}>
          <ProductSearchBar />
        </Grid>

        <Grid item xs={12} md={8} lg={9}>
          <ProductShowCase />
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProductContainer
