import { Container, Grid, Button, makeStyles } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { deleteProduct } from '../../redux/actions'
import { RootState } from '../../types'

const useStyles = makeStyles((theme) => ({
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

const DeleteProduct = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const token = useSelector<RootState, string>((state) => state.user.token)
  const submitHandler = (values: any, actions: any) => {
    const { productId } = values
    console.log(values)
    dispatch(deleteProduct(token, productId))
    actions.resetForm()
    actions.setSubmitting(false)
  }

  return (
    <Container component="section" maxWidth="md" className={classes.container}>
      <div className={classes.paper}>
        <Formik
          onSubmit={submitHandler}
          initialValues={{
            productId: '',
          }}
        >
          <Form className={classes.form}>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Field
                  component={TextField}
                  name="productId"
                  variant="outlined"
                  fullWidth
                  id="productId"
                  label="ID món ăn"
                  color="secondary"
                />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Xóa món ăn
              </Button>
            </Grid>
          </Form>
        </Formik>
      </div>
    </Container>
  )
}

export default DeleteProduct
