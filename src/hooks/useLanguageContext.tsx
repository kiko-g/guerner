import React, { createContext, useContext } from 'react'
import { Language } from '../types'

interface LanguageContextProps {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextProps>({
  language: 'pt',
  setLanguage: () => {},
})

interface LanguageProviderProps {
  children: React.ReactNode
}

const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = React.useState<Language>('pt')

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

const useLanguage = () => useContext(LanguageContext)

export { LanguageProvider, useLanguage }
