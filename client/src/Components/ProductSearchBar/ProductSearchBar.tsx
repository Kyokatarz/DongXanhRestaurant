import {
  Checkbox,
  Container,
  createStyles,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  TextField,
  Theme,
} from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchBar: {
      width: '100%',
    },
  })
)

const ProductSearchBar = () => {
  const classes = useStyles()
  return (
    <Container>
      <TextField
        label="Search..."
        variant="outlined"
        className={classes.searchBar}
      />
      <List>
        <ListItem key="beef">
          <ListItemText>Beef</ListItemText>
          <ListItemSecondaryAction>
            <Checkbox edge="end" />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem key="chicken">
          <ListItemText>Chicken</ListItemText>
          <ListItemSecondaryAction>
            <Checkbox edge="end" />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem key="pork">
          <ListItemText>Pork</ListItemText>
          <ListItemSecondaryAction>
            <Checkbox edge="end" />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </Container>
  )
}

export default ProductSearchBar
