import React, { ChangeEvent, useState } from 'react'
import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import { useSelector } from 'react-redux'
import lodash from 'lodash'

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
  const filteredProducts = useSelector<RootState, Product[]>(
    (state) => state.product.filteredProducts
  )
  const [activePage, setActivePage] = useState(1)
  const chunks = lodash.chunk(filteredProducts, 2)
  const activeChunk = chunks[activePage - 1]
  const totalPage = chunks.length

  const pageChangeHandler = (_: ChangeEvent<unknown>, value: number) => {
    setActivePage(value)
  }

  return (
    <div className={classes.container}>
      <Grid container spacing={2} justify="center">
        {(activeChunk || []).map((product) => (
          <ProductCard
            key={product._id}
            _id={product._id}
            name={product.name}
            price={product.price}
            category={product.category}
            description={product.description}
          />
        ))}
      </Grid>
      <Pagination
        count={totalPage}
        className={classes.pagination}
        onChange={pageChangeHandler}
      />
    </div>
  )
}

export default ProductShowCase
