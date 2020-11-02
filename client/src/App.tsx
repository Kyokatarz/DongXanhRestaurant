import React, { useState } from 'react'

import Routes from './Routes'
import LangContext, { LangContextObj, LangType } from './context/LangContext'
import Navbar from './components/Navbar/Navbar'

export default function App() {
  const [langContext, setLangContext] = useState<LangContextObj>({
    lang: 'vi',
    switchLang: (language: LangType) =>
      setLangContext((prev) => ({ ...prev, lang: language })),
  })
  return (
    <LangContext.Provider value={langContext}>
      <Navbar />
      <Routes />
    </LangContext.Provider>
  )
}
