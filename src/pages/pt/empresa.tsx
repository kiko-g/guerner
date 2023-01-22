import React from 'react'
import { translations } from '../../config'
import { useLanguage } from '../../hooks/useLanguageContext'
import { Layout } from '../../components/layout'

export default function CompanyPage() {
  const { language } = useLanguage()
  const location = translations[language].location.company
  const title = translations[language].phrases.company.title
  const pageText = translations[language].phrases.company.text

  return (
    <Layout location={location}>
      <main className="flex flex-col items-center justify-center gap-y-4 py-8 md:gap-y-6 md:py-16">
        <header className="w-full space-y-6">
          <h1 className="text-center text-4xl font-bold tracking-tight">{title}</h1>
          <p className="text-center font-normal lg:text-justify">{pageText}</p>
        </header>
      </main>
    </Layout>
  )
}
