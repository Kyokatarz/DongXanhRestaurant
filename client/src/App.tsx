import React, { useState } from 'react'

import Routes from './Routes'
import LangContext, { LangContextObj, LangType } from './context/LangContext'
import Topbar from './components/Topbar'
import './App.scss'

export default function App() {
  const [langContext, setLangContext] = useState<LangContextObj>({
    lang: 'vi',
    switchLang: (language: LangType) =>
      setLangContext((prev) => ({ ...prev, lang: language })),
  })
  return (
    <LangContext.Provider value={langContext}>
      <Topbar />
      <div className="ContentContainer">
        <Routes />
      </div>
    </LangContext.Provider>
  )
}
