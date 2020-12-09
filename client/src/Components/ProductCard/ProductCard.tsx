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

const ProductCard = () => {
  const classes = useStyles()
  return (
    <Grid item md={10} lg={5}>
      <Card>
        <CardActionArea>
          <CardMedia
            image="http://via.placeholder.com/400x200"
            className={classes.image}
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              Dish Name
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              description description description description description
              description description description description description
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.buttonContainer}>
          <Button size="small" color="primary">
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default ProductCard
