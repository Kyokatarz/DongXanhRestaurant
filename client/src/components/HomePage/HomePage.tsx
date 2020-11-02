import React, { useContext, useEffect } from 'react'
import { Button } from 'semantic-ui-react'

import LangContext from '../../context/LangContext'
import { languages } from '../../lang/lang'

const HomePage = () => {
  const { lang, switchLang } = useContext(LangContext)

  useEffect(() => {
    console.log(lang)
  })
  return (
    <div>
      {lang !== 'vi' && (
        <Button onClick={() => switchLang('vi')}>Tiếng Việt</Button>
      )}
      {lang !== 'en' && (
        <Button onClick={() => switchLang('en')}>English</Button>
      )}
      <h1>{languages[lang].homepage}</h1>
    </div>
  )
}

export default HomePage
