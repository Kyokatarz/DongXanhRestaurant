import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme,
} from '@material-ui/core'
import React from 'react'
import ProductRight from '../ProductRight'
import ProductLeft from '../ProductLeft'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    innerContainer: {
      border: '1px solid blue',
      marginTop: 10,
      padding: 0,
      paddingTop: 5,
    },
  })
)

const ProductContainer = () => {
  const classes = useStyles()
  return (
    <Container className={classes.innerContainer}>
      <Grid container spacing={1} direction="row">
        <Grid item xs={12} lg={4}>
          <ProductLeft />
        </Grid>

        <Grid item xs={12} lg={8}>
          <ProductRight />
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProductContainer
