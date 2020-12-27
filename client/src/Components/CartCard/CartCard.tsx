import {
  makeStyles,
  Theme,
  createStyles,
  ListItem,
  Card,
  Typography,
  IconButton,
} from '@material-ui/core'
import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateItemInCartAndSave } from '../../redux/actions'
import { RootState, ItemInCart } from '../../types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      width: '100%',
      padding: theme.spacing(2),
    },
  })
)

type Props = {
  _id: string
  name: string
  quantity: number
  price: number
}

const CartCard: React.FC<Props> = ({ _id, name, quantity, price }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const inCart = useSelector<RootState, ItemInCart[]>(
    (state) => state.cart.inCart
  )
  const addHandler = () => {
    dispatch(updateItemInCartAndSave(inCart, { _id, name, price }, 'add'))
  }
  const removeHandler = () => {
    dispatch(updateItemInCartAndSave(inCart, { _id, name, price }, 'remove'))
  }

  return (
    <ListItem>
      {_id}
      <Card className={classes.card}>
        <Typography variant="h6" color="secondary">
          {name}
        </Typography>
        <Typography variant="body1">
          Số lượng:
          <IconButton onClick={removeHandler}>
            <Remove fontSize="small" />
          </IconButton>
          {quantity}
          <IconButton onClick={addHandler}>
            <Add fontSize="small" />
          </IconButton>
        </Typography>
        <Typography variant="body1">Đơn giá: VND {price}</Typography>
      </Card>
    </ListItem>
  )
}

export default CartCard
