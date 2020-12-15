import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme,
} from '@material-ui/core'
import React, { useState } from 'react'

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
  const [searchValue, setSearchValue] = useState('')
  const [categoryCheck, setCategoryCheck] = useState({
    pork: false,
    fish: false,
    beef: false,
  })
  return (
    <Container className={classes.innerContainer}>
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
          <ProductShowCase
            searchValue={searchValue}
            categoryCheck={categoryCheck}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProductContainer
