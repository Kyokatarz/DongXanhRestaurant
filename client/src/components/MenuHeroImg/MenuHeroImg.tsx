import React, { useContext } from 'react'

import LangContext from '../../context/LangContext'
import languages from '../../lang/lang'
import './MenuHeroImg.scss'

const MenuHeroImg = () => {
  const { lang } = useContext(LangContext)

  return (
    <div className="MenuHeroImg">
      <div className="MenuHeroImg__Title">
        <h1>{languages[lang].menu}</h1>
      </div>
    </div>
  )
}

export default MenuHeroImg
