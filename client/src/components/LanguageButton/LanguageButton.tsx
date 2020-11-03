import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'

import LangContext from '../../context/LangContext'

const LanguageButton = () => {
  const { lang, switchLang } = useContext(LangContext)

  return (
    <Dropdown>
      <Dropdown.Toggle>GlobeIcon</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => switchLang('vi')}>
          Tiếng Việt
        </Dropdown.Item>
        <Dropdown.Item onClick={() => switchLang('en')}>English</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default LanguageButton
