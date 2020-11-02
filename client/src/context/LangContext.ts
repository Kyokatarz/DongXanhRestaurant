import React from 'react'

export type LangType = 'vi' | 'en'

export type LangContextObj = {
  lang: LangType
  switchLang: (lang: LangType) => void
}
const contextObj: LangContextObj = {
  lang: 'vi',
  switchLang: (lang: LangType) => {},
}
export default React.createContext(contextObj)
