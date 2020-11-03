import React, { useContext } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import LangContext from '../../context/LangContext'
import languages from '../../lang/lang'
import LanguageButton from '../LanguageButton'
import './Topbar.scss'

const Topbar = () => {
  const { lang } = useContext(LangContext)
  return (
    <Navbar expand="sm" bg="dark" variant="dark" className="Topbar">
      <Navbar.Brand>Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link>{languages[lang].homepage}</Nav.Link>
          <Nav.Link>{languages[lang].menu}</Nav.Link>
          <Nav.Link>{languages[lang].contactUs}</Nav.Link>
        </Nav>
        <LanguageButton />
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Topbar
