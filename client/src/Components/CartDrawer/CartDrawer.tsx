import {
  Drawer,
  makeStyles,
  createStyles,
  Theme,
  List,
  ListItem,
  IconButton,
  Typography,
  CardContent,
  Card,
  Button,
} from '@material-ui/core'
import { Close } from '@material-ui/icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { toggleCartDrawer } from '../../redux/actions'
import { ItemInCart, RootState } from '../../types'
import CartCard from '../CartCard'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      overflowY: 'scroll',
    },
    listContainer: {
      [theme.breakpoints.down('md')]: {
        width: '40vw',
      },
      [theme.breakpoints.down('sm')]: {
        width: '70vw',
      },
      width: '30vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      width: '100%',
      padding: theme.spacing(2),
    },
    cartFooter: {
      marginTop: theme.spacing(4),
    },
  })
)

const CartDrawer = () => {
  const classes = useStyles()
  const cartDrawer = useSelector<RootState, boolean>(
    (state) => state.ui.cartDrawer
  )
  const inCart = useSelector<RootState, ItemInCart[]>(
    (state) => state.cart.inCart
  )
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(toggleCartDrawer())
  }

  return (
    <Drawer
      anchor="right"
      open={cartDrawer}
      onClose={handleClose}
      className={classes.drawer}
    >
      <List className={classes.listContainer}>
        <ListItem divider>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </ListItem>

        {inCart.map((item) => (
          <CartCard
            _id={item._id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            key={item._id}
          />
        ))}

        <ListItem>
          <Typography variant="body1">Tổng cộng: </Typography>
          <Typography variant="h5" color="secondary">
            {inCart
              .map((item) => item.price * item.quantity)
              .reduce((sum, item) => sum + item, 0)
              .toLocaleString('vi-VI', { style: 'currency', currency: 'VND' })}
          </Typography>
        </ListItem>

        <ListItem>
          <Card className={classes.cartFooter} elevation={24}>
            <CardContent>
              <Typography variant="subtitle1">
                Tính năng thánh toán online đang được phát triển! <br />
                Hãy gọi điện để đặt món ngay nhé!
              </Typography>

              <Link
                to="/contact"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleClose}
                >
                  Đặt món ngay
                </Button>
              </Link>
            </CardContent>
          </Card>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default CartDrawer
