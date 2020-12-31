import {
  Container,
  createStyles,
  makeStyles,
  Tab,
  Tabs,
  Theme,
} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { firstFetch } from '../../redux/actions'
import { RootState, Product } from '../../types'
import AddNewCategory from '../AddNewCategory'
import AddNewProduct from '../AddNewProduct'
import DeleteProduct from '../DeleteProduct'
import TabPanel from '../TabPanel'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
)

const AdminFunctionality = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const products = useSelector<RootState, Product[]>(
    (state) => state.product.allProducts
  )

  const [value, setValue] = useState(0)

  const onChangeHandler = (_: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }
  useEffect(() => {
    if (products.length === 0) {
      dispatch(firstFetch())
    }
  })

  return (
    <Container component="section" maxWidth="md" className={classes.container}>
      <Tabs value={value} onChange={onChangeHandler}>
        <Tab label="Thêm món" />
        <Tab label="Thêm thể loại" />
        <Tab label="Xóa món ăn" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <AddNewProduct />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AddNewCategory />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DeleteProduct />
      </TabPanel>
    </Container>
  )
}

export default AdminFunctionality
