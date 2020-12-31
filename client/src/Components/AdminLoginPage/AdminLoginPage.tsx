import {
  Container,
  Typography,
  Grid,
  Button,
  makeStyles,
} from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import React from 'react'
import { useDispatch } from 'react-redux'

import { sendLogInRequest } from '../../redux/actions'
import { signInSchema } from '../../yupSchema'

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

const AdminLoginPage = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const submitHandler = (values: any, actions: any) => {
    const { email, password } = values
    console.log(values)
    dispatch(sendLogInRequest(email, password))
    actions.setSubmitting(false)
  }

  return (
    <Container component="section" maxWidth="md" className={classes.container}>
      <div className={classes.paper}>
        <Typography component="h1" variant="h3" align="center">
          Admin Page
        </Typography>

        <Formik
          validationSchema={signInSchema}
          onSubmit={submitHandler}
          initialValues={{
            email: '',
            password: '',
          }}
        >
          <Form className={classes.form}>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Field
                  component={TextField}
                  name="email"
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="Email"
                  color="secondary"
                />
              </Grid>
              <Grid item>
                <Field
                  component={TextField}
                  name="password"
                  variant="outlined"
                  fullWidth
                  type="password"
                  id="password"
                  label="Password"
                  color="secondary"
                />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign In
              </Button>
            </Grid>
          </Form>
        </Formik>
      </div>
    </Container>
  )
}

export default AdminLoginPage
