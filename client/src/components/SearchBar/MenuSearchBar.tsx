import React, { useContext } from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'

import LangContext from '../../context/LangContext'
import languages from '../../lang/lang'

const MenuSearchBar = () => {
  const { lang } = useContext(LangContext)
  return (
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text>
          <BsSearch />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl placeholder={languages[lang].searchPlaceholder} />
    </InputGroup>
  )
}

export default MenuSearchBar
