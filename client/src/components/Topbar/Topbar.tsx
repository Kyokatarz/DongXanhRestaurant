import React, { useContext } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import LangContext from '../../context/LangContext'
import languages from '../../lang/lang'
import LanguageButton from '../LanguageButton'
import './Topbar.scss'
import { Link } from 'react-router-dom'

const Topbar = () => {
  const { lang } = useContext(LangContext)
  return (
    <Navbar expand="sm" bg="dark" variant="dark" className="Topbar">
      <Navbar.Brand>
        <Link to="/">Logo</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="Navbar__Link" as="ul">
          <Nav.Link as="li">
            <Link to="/">{languages[lang].homepage} </Link>
          </Nav.Link>
          <Nav.Link as="li">
            <Link to="/menu">{languages[lang].menu}</Link>
          </Nav.Link>

          <Nav.Link as="li">
            <Link to="/contact">{languages[lang].contactUs}</Link>
          </Nav.Link>
          <LanguageButton />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Topbar
