import {
  Drawer,
  makeStyles,
  createStyles,
  Theme,
  List,
  ListItem,
  IconButton,
} from '@material-ui/core'
import { Close } from '@material-ui/icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { toggleCartDrawer } from '../../redux/actions'
import { ItemInCart, RootState } from '../../types'
import CartCard from '../CartCard'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    <Drawer anchor="right" open={cartDrawer} onClose={handleClose}>
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
          Tổng cộng:{' '}
          {inCart
            .map((item) => item.price * item.quantity)
            .reduce((sum, item) => sum + item, 0)}
        </ListItem>
      </List>
    </Drawer>
  )
}

export default CartDrawer
