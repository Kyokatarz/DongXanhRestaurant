import React, { useContext, useEffect } from 'react'
import Button from 'react-bootstrap/Button'

import LangContext from '../../context/LangContext'

import Introduction from '../Introduction'

const HomePage = () => {
  const { lang, switchLang } = useContext(LangContext)

  return <Introduction />
}

export default HomePage
