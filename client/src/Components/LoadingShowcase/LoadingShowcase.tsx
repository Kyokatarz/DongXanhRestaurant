import { Grid } from '@material-ui/core'
import React from 'react'

import LoadingCard from '../LoadingCard'

const LoadingShowcase = () => {
  return (
    <Grid container spacing={2}>
      {Array.from({ length: 8 }, (_, index) => (
        <LoadingCard key={index} />
      ))}
    </Grid>
  )
}

export default LoadingShowcase
