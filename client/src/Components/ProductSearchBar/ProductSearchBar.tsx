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
import React, { ChangeEvent } from 'react'
import lodash from 'lodash'

import { Category } from '../../types'

type Props = {
  searchValue: string
  setSearchValue: any
  categoryCheck: {
    fish: boolean
    beef: boolean
    pork: boolean
  }
  setCategoryCheck: any
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchBar: {
      width: '100%',
    },
  })
)

const ProductSearchBar: React.FC<Props> = ({
  searchValue,
  setSearchValue,
  categoryCheck,
  setCategoryCheck,
}) => {
  const classes = useStyles()
  const categories: Category[] = ['pork', 'fish', 'beef']

  const handleCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
    setCategoryCheck({
      ...categoryCheck,
      [event.target.name]: event.target.checked,
    })
  }

  const handleSearchBar = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  return (
    <Container>
      <TextField
        label="Search..."
        variant="outlined"
        className={classes.searchBar}
        onChange={handleSearchBar}
        value={searchValue}
      />
      <List>
        {categories.map((item) => (
          <ListItem key={item}>
            <ListItemText>{lodash.capitalize(item)}</ListItemText>
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                name={item}
                onChange={handleCheckBox}
                checked={categoryCheck[item]}
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export default ProductSearchBar
