import React from 'react'
import { useLanguage } from '../../hooks/useLanguageContext'
import { translations } from '../../config'

type Props = {}

export default function Presentation({}: Props) {
  const { language } = useLanguage()
  const sectionId = translations[language].phrases.company.sectionIds.presentation

  return (
    <section className={sectionId}>
      <div>Presentation</div>
    </section>
  )
}
