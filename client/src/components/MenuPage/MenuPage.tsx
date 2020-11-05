import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import LangContext from '../../context/LangContext'
import languages from '../../lang/lang'
import CardContainer from '../CardContainer'
import MenuHeroImg from '../MenuHeroImg'
import MenuSidebar from '../MenuSidebar'
import './MenuPage.scss'

const MenuPage = () => {
  const { lang } = useContext(LangContext)
  return (
    <section className="MenuPage">
      <MenuHeroImg />
      <Container>
        <Row className="MenuRow">
          <Col lg="3" className="MenuRow__MenuSidebar">
            <MenuSidebar />
          </Col>
          <Col lg="5" className="TestCol">
            <CardContainer />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default MenuPage
