import React from 'react'
import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import { useSelector } from 'react-redux'

import ProductCard from '../ProductCard'
import { Product, RootState } from '../../types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
    pagination: {
      margin: theme.spacing(1),
    },
  })
)

const ProductShowCase = () => {
  const classes = useStyles()
  const allProducts = useSelector<RootState, Product[]>(
    (state) => state.product.allProducts
  )

  return (
    <div className={classes.container}>
      <Grid container spacing={2} justify="center">
        {allProducts.map((product) => (
          <ProductCard />
        ))}
      </Grid>
      <Pagination count={10} className={classes.pagination} />
    </div>
  )
}

export default ProductShowCase
