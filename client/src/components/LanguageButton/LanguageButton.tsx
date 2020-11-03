import React, { useContext } from 'react'
import { Button } from 'semantic-ui-react'

import LangContext from '../../context/LangContext'

const LanguageButton = () => {
  const { lang, switchLang } = useContext(LangContext)

  return (
    <>
      {lang !== 'vi' && (
        <Button onClick={() => switchLang('vi')}>Tiếng Việt</Button>
      )}
      {lang !== 'en' && (
        <Button onClick={() => switchLang('en')}>English</Button>
      )}
    </>
  )
}

export default LanguageButton
