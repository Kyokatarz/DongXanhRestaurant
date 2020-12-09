import React from 'react'
import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import ProductCard from '../ProductCard'

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

const ProductRight = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Grid container spacing={2} justify="center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Grid>
      <Pagination count={10} className={classes.pagination} />
    </div>
  )
}

export default ProductRight
