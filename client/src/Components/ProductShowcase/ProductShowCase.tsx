import React, { ChangeEvent, useEffect, useState } from 'react'
import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import { useSelector } from 'react-redux'

import ProductCard from '../ProductCard'
import { Product, RootState } from '../../types'
import useCategoryFilterAndChunks from '../../hooks/useCategoryFilterAndChunks'
import useSearch from '../../hooks/useSearch'
import LoadingShowcase from '../LoadingShowcase'

type Props = {
  searchValue: string
  categoryCheck: string[]
}

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

const ProductShowCase: React.FC<Props> = ({ searchValue, categoryCheck }) => {
  const classes = useStyles()
  const allProducts = useSelector<RootState, Product[]>(
    (state) => state.product.allProducts
  )
  const [activePage, setActivePage] = useState(0)

  const searchFiltered = useSearch(allProducts, searchValue)
  const chunks = useCategoryFilterAndChunks(searchFiltered, categoryCheck, 8)
  const activeChunk = chunks[activePage]
  const totalPage = chunks.length

  const pageChangeHandler = (_: ChangeEvent<unknown>, value: number) => {
    setActivePage(value - 1)
  }

  useEffect(() => {
    console.log(allProducts)
  })

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
      <LoadingShowcase />
    </div>
  )
}

export default ProductShowCase
