import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { Badge, IconButton } from '@material-ui/core'

import { RootState, ItemInCart } from '../../types'
import { toggleCartDrawer } from '../../redux/actions'

const CartIcon = () => {
  const inCart = useSelector<RootState, ItemInCart[]>(
    (state) => state.cart.inCart
  )
  const dispatch = useDispatch()

  const onClickHandler = () => {
    dispatch(toggleCartDrawer())
  }

  return (
    <IconButton onClick={onClickHandler}>
      <Badge
        badgeContent={inCart
          .map((item) => item.quantity)
          .reduce((sum, quantity) => sum + quantity, 0)
          .toString()}
        color="primary"
      >
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  )
}

export default CartIcon
