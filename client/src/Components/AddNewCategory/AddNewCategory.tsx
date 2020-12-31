import { Container, Grid, Button, makeStyles } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addNewCategory } from '../../redux/actions'
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

const AddNewCategory = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const token = useSelector<RootState, string>((state) => state.user.token)
  const submitHandler = (values: any, actions: any) => {
    const { categoryName } = values
    dispatch(addNewCategory(categoryName, token))
    actions.resetForm()
    actions.setSubmitting(false)
  }

  return (
    <Container component="section" maxWidth="md" className={classes.container}>
      <div className={classes.paper}>
        <Formik
          onSubmit={submitHandler}
          initialValues={{
            categoryName: '',
          }}
        >
          <Form className={classes.form}>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Field
                  component={TextField}
                  name="categoryName"
                  variant="outlined"
                  fullWidth
                  id="categoryName"
                  label="Tên thể loại món mới"
                  color="secondary"
                />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Thêm thể loại
              </Button>
            </Grid>
          </Form>
        </Formik>
      </div>
    </Container>
  )
}

export default AddNewCategory
