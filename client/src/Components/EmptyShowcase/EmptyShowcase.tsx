import { makeStyles, createStyles, Typography } from '@material-ui/core'
import React from 'react'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
    icon: {
      fontSize: 100,
    },
  })
)

const EmptyShowcase = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <SearchRoundedIcon fontSize="inherit" className={classes.icon} />
      <Typography variant="h6">Không có kết quả tìm kiếm.</Typography>
    </div>
  )
}

export default EmptyShowcase
