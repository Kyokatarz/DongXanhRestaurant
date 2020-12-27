import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme,
} from '@material-ui/core'
import React, { useEffect, useState } from 'react'

import ProductShowCase from '../ProductShowcase'
import ProductSearchBar from '../ProductSearchBar'
import { useSelector } from 'react-redux'
import { RootState } from '../../types'
import LoadingShowcase from '../LoadingShowcase'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    innerContainer: {
      [theme.breakpoints.down('sm')]: {
        width: '90vw',
      },
      border: `2px solid ${theme.palette.primary.light}`,
      marginTop: 10,
      padding: theme.spacing(2),
      borderRadius: 7,
      marginBottom: theme.spacing(2),
    },
  })
)

const ProductContainer = () => {
  const classes = useStyles()
  const [searchValue, setSearchValue] = useState('')
  const [categoryCheck, setCategoryCheck] = useState<string[]>([])
  const allItemsLoading = useSelector<RootState, boolean>(
    (state) => state.ui.allItemsLoading
  )

  useEffect(() => {
    console.log('categoryCheck: ', categoryCheck)
  })
  return (
    <Container className={classes.innerContainer} maxWidth="lg">
      <Grid container spacing={1} direction="row">
        <Grid item xs={12} md={4} lg={3}>
          <ProductSearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            categoryCheck={categoryCheck}
            setCategoryCheck={setCategoryCheck}
          />
        </Grid>

        <Grid item xs={12} md={8} lg={9}>
          {!allItemsLoading ? (
            <ProductShowCase
              searchValue={searchValue}
              categoryCheck={categoryCheck}
            />
          ) : (
            <LoadingShowcase />
          )}
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProductContainer
