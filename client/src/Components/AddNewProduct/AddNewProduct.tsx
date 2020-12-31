import { Grid, Button, makeStyles, Theme, MenuItem } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addNewProduct } from '../../redux/actions'
import { RootState, Category } from '../../types'
import { addNewProductSchema } from '../../yupSchema'

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    marginTop: theme.spacing(8),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const AddNewProduct = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const categories = useSelector<RootState, Category[]>(
    (state) => state.product.allCategories
  )
  const token = useSelector<RootState, string>((state) => state.user.token)

  const submitHandler = (values: any, actions: any) => {
    const { name, category, price, description } = values

    const categoryId = categories.find((cat) => cat.name === category)?._id
    if (!categoryId) return

    dispatch(addNewProduct(token, { name, categoryId, price, description }))
    actions.resetForm()
    actions.setSubmitting(false)
  }

  return (
    <Formik
      validationSchema={addNewProductSchema}
      onSubmit={submitHandler}
      initialValues={{
        name: '',
        category: '',
        price: 0,
        description: '',
        filepath: '',
      }}
    >
      <Form className={classes.form}>
        <Grid container direction="column" spacing={1}>
          <Grid item>
            <Field
              component={TextField}
              name="name"
              variant="outlined"
              fullWidth
              id="name"
              label="Tên món ăn"
              color="secondary"
            />
          </Grid>
          <Grid item>
            <Field
              component={TextField}
              name="category"
              variant="outlined"
              select
              fullWidth
              id="category"
              label="Thể loại"
              color="secondary"
            >
              {categories.map((category) => (
                <MenuItem value={category.name} key={category._id}>
                  {category.name}
                </MenuItem>
              ))}
            </Field>
          </Grid>
          <Grid item>
            <Field
              component={TextField}
              name="price"
              variant="outlined"
              fullWidth
              id="price"
              label="Giá"
              color="secondary"
              type="number"
            />
          </Grid>
          <Grid item>
            <Field
              component={TextField}
              name="description"
              variant="outlined"
              fullWidth
              id="description"
              label="Mô tả"
              color="secondary"
              multiline
            />
          </Grid>
          <Grid item>
            <Field
              component={TextField}
              name="filepath"
              variant="outlined"
              fullWidth
              id="filepath"
              label="Tên file hình ảnh"
              color="secondary"
            />
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Thêm món
          </Button>
        </Grid>
      </Form>
    </Formik>
  )
}

export default AddNewProduct
