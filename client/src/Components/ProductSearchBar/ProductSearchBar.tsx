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

import { Category, RootState } from '../../types'
import { useSelector } from 'react-redux'

type Props = {
  searchValue: string
  setSearchValue: any
  categoryCheck: string[]
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
  const allCategories = useSelector<RootState, Category[]>(
    (state) => state.product.allCategories
  )

  const categories = allCategories.map((categoryObj) => categoryObj.name)

  const handleCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
    categoryCheck.includes(event.target.name)
      ? setCategoryCheck((state: any) =>
          [...state].filter((category) => category !== event.target.name)
        ) // returns a new state having exclude the one that unticked
      : setCategoryCheck((state: any) => [...state, event.target.name])
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
        color="secondary"
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
                checked={categoryCheck.includes(item)}
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export default ProductSearchBar
