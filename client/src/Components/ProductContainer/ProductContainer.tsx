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
