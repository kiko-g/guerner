import React, { createContext, useContext } from 'react'
import { Language } from '../types'

// context
interface LanguageContextProps {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextProps>({
  language: 'pt',
  setLanguage: () => {},
})

// provider
interface LanguageProviderProps {
  children: React.ReactNode
}

const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = React.useState<Language>(() => {
    if (typeof window === 'undefined') return 'pt'
    else {
      const splitStr = window.location.pathname.split('/')
      return splitStr[1] === '' ? 'pt' : (splitStr[1] as Language)
    }
  })

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

// hook
const useLanguage = () => useContext(LanguageContext)

export { LanguageProvider, useLanguage }
