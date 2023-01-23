import React from 'react'
import { useLanguage } from '../../hooks/useLanguageContext'
import { translations } from '../../config'

type Props = {}

export default function Production({}: Props) {
  const { language } = useLanguage()
  const sectionId = translations[language].phrases.company.sectionIds.production

  return (
    <section id={sectionId}>
      <div>Production</div>
    </section>
  )
}
