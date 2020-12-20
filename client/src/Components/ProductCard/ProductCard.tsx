import React from 'react'
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
  Theme,
  Typography,
} from '@material-ui/core'
import lodash from 'lodash'

import { Product } from '../../types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      height: 140,
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
    .map((string) => lodash.capitalize(string))
    .join(', ')
  const classes = useStyles()
  return (
    <Grid item xs={12} md={10} lg={5}>
      <Card>
        <CardActionArea>
          <CardMedia
            image="./Assets/BaChiHeoNuongRiengMe.jpg"
            className={classes.image}
          />
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
