import React, { useContext } from 'react'
import { Menu } from 'semantic-ui-react'

import LangContext from '../../context/LangContext'
import LanguageButton from '../LanguageButton'
import languages from '../../lang/lang'

const Navbar = () => {
  const { lang } = useContext(LangContext)

  return (
    <Menu color="red">
      <Menu.Item color="purple">Logo</Menu.Item>
      <Menu.Item>{languages[lang].homepage}</Menu.Item>
      <Menu.Item>{languages[lang].menu}</Menu.Item>
      <Menu.Item>{languages[lang].contactUs}</Menu.Item>
      <Menu.Item>
        <LanguageButton />
      </Menu.Item>
    </Menu>
  )
}

export default Navbar
