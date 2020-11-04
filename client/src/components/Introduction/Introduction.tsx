import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'

import LangContext from '../../context/LangContext'
import IntroductionCarousel from '../IntroductionCarousel'
import languages from '../../lang/lang'
import './Introduction.scss'

const Introduction = () => {
  const { lang } = useContext(LangContext)
  return (
    <section className="Introduction">
      <IntroductionCarousel />
      <Button>{languages[lang].goToMenu}</Button>
    </section>
  )
}

export default Introduction
