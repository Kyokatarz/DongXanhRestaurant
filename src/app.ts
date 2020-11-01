import bluebird from 'bluebird'
import compression from 'compression'
import express from 'express'
import lusca from 'lusca'
import mongoose from 'mongoose'
import cors from 'cors'

import apiErrorHandler from './middlewares/apiErrorHandler'
import movieRouter from './routers/movie'
import productRouter from './routers/product'
import { MONGODB_URI } from './util/secrets'

const app = express()
const mongoUrl = MONGODB_URI

mongoose.Promise = bluebird
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
  })
  .catch((err: Error) => {
    console.log(
      'MongoDB connection error. Please make sure MongoDB is running. ' + err
    )
    process.exit(1)
  })

// Express configuration
app.set('port', process.env.PORT || 3000)

// Use common 3rd-party middlewares
app.use(compression())
app.use(lusca.xframe('SAMEORIGIN'))
app.use(lusca.xssProtection(true))
app.use(express.json())
app.use(cors())
// Use movie router
app.use('/api/v1/movies', movieRouter)
app.use('/api/v1/products', productRouter)
// Custom API error handler
app.use(apiErrorHandler)

export default app
