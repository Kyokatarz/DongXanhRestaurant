import React, { useContext, useState } from 'react'
import { Nav } from 'react-bootstrap'
import { AiFillFire } from 'react-icons/ai'

import LangContext from '../../context/LangContext'
import languages from '../../lang/lang'

const CategoryChooser = () => {
  const { lang } = useContext(LangContext)
  const [activeKey, setActiveKey] = useState('all')

  const selectHandler = (eventKey: any, event: any) => {
    setActiveKey(eventKey)
  }

  return (
    <Nav variant="pills" className="flex-column" activeKey={activeKey}>
      <Nav.Item>
        <Nav.Link eventKey="all" onSelect={selectHandler}>
          {languages[lang].all}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="hot" onSelect={selectHandler}>
          HOT <AiFillFire />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="fish" onSelect={selectHandler}>
          {languages[lang].fish}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="beef" onSelect={selectHandler}>
          {languages[lang].beef}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="chicken" onSelect={selectHandler}>
          {languages[lang].chicken}
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default CategoryChooser
