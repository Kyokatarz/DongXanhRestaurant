import React, { useState } from 'react'

import Routes from './Routes'
import LangContext, { LangContextObj, LangType } from './context/LangContext'
import Topbar from './components/Topbar'
import './App.scss'

const dev = process.env.NODE_ENV === 'development'

export const url = dev ? 'http://localhost:3000' : '' //TODO: Add production url here

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
