import React, { useState } from 'react'
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
import lodash from 'lodash'

import { Product } from '../../types'
import { Skeleton } from '@material-ui/lab'

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
  name,
  price,
  category,
  description,
}) => {
  const categoryString = category
    .map((categoryObj) => lodash.capitalize(categoryObj.name))
    .join(', ')
  const classes = useStyles()
  const [imgLoad, setImgLoad] = useState(false)

  return (
    <Grid item xs={12} md={10} lg={5}>
      <Card>
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
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.buttonContainer}>
          <Button size="small" color="secondary">
            {price}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default ProductCard
