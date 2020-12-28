import {
  makeStyles,
  Theme,
  createStyles,
  Container,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { host } from '../../App'
import { Product } from '../../types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      height: 500,
      width: '100%',
      objectFit: 'cover',
      marginBottom: theme.spacing(1),
    },
    card: {
      width: '100%',
    },
  })
)

const ProductPage = () => {
  const classes = useStyles()
  const [currentProduct, setCurrentProduct] = useState<Product>()
  const { productId } = useParams<{ productId: string }>()
  useEffect(() => {
    async function getProductById() {
      const response = await axios.get(host + `/api/v1/products/${productId}`)
      console.log(response)
      setCurrentProduct(response.data)
    }
    getProductById()
  }, [productId])
  return (
    <Container className={classes.container} component="section" maxWidth="md">
      <img
        src="https://dong-xanh-restaurant.s3-ap-southeast-1.amazonaws.com/AllDishes/LauSuaDongXanh.jpg"
        alt=""
        className={classes.image}
      />
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5">{currentProduct?.name}</Typography>
          <Typography variant="subtitle1">
            {currentProduct?.category.map((cat) => cat.name).join(', ')}
          </Typography>
          <Typography variant="body1">{currentProduct?.description}</Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

export default ProductPage
