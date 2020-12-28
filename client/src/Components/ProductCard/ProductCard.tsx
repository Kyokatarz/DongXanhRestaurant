import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  createStyles,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { Skeleton } from '@material-ui/lab'
import lodash from 'lodash'

import { ItemInCart, Product, RootState } from '../../types'
import { updateItemInCartAndSave } from '../../redux/actions'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(() =>
  createStyles({
    image: {
      height: 140,
      width: '100%',
      objectFit: 'cover',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  })
)

const ProductCard: React.FC<Product> = ({
  _id,
  name,
  price,
  category,
  description,
}) => {
  const classes = useStyles()
  const inCart = useSelector<RootState, ItemInCart[]>(
    (state) => state.cart.inCart
  )
  const [imgLoad, setImgLoad] = useState(false)
  const dispatch = useDispatch()

  const categoryString = category
    .map((categoryObj) => lodash.capitalize(categoryObj.name))
    .join(', ')

  const onAddItemHandler = () => {
    dispatch(updateItemInCartAndSave(inCart, { _id, name, price }, 'add'))
  }

  return (
    <Grid item xs={12} md={10} lg={5}>
      <Card>
        <Link
          to={`/product/${_id}`}
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          <CardActionArea>
            {!imgLoad && <Skeleton className={classes.image} variant="rect" />}
            <CardMedia>
              <img
                style={{ display: imgLoad ? 'block' : 'none ' }}
                src="https://dong-xanh-restaurant.s3-ap-southeast-1.amazonaws.com/AllDishes/LauSuaDongXanh.jpg"
                className={classes.image}
                onLoad={() => setImgLoad(true)}
                alt=""
              />
            </CardMedia>

            <CardContent>
              <Typography variant="h5" component="h2">
                {name}
              </Typography>

              <Typography variant="subtitle1" component="p">
                {categoryString}
              </Typography>

              <Typography variant="body1" color="textSecondary" component="p">
                {description
                  ? description?.length > 200
                    ? description?.slice(0, 200) + '...'
                    : description
                  : null}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions
          className={classes.buttonContainer}
          onClick={onAddItemHandler}
        >
          <Button size="small" color="secondary" variant="outlined">
            <AddShoppingCartIcon />
            {price.toLocaleString('vi-VI', {
              style: 'currency',
              currency: 'VND',
            })}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default ProductCard
