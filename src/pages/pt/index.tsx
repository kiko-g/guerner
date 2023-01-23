import React from 'react'
import { translations } from '../../config'
import { Layout } from '../../components/layout'
import { useLanguage } from '../../hooks/useLanguageContext'
import { HeroBanner, CompanyCTA, ContactsCTA, ProductsCTA } from '../../components/home'

export default function IndexPage() {
  const { language } = useLanguage()
  const location = translations[language].location.home

  return (
    <Layout location={location} special>
      <HeroBanner />
      <CompanyCTA />
      <ProductsCTA />
      <ContactsCTA />
    </Layout>
  )
}
