import React from 'react'
import { useLanguage } from '../../hooks/useLanguageContext'
import { translations } from '../../config'

type Props = {}

export default function Welcome({}: Props) {
  const { language } = useLanguage()
  const sectionId = translations[language].phrases.company.sectionIds.welcome

  return (
    <section className={sectionId}>
      <div>Welcome</div>
    </section>
  )
}
