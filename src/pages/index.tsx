import React from 'react'
import { graphql } from 'gatsby'
import { Layout, Seo } from '../components/layout'
import { HeroBanner, CompanyCTA, ContactsCTA, ProductsCTA } from '../components/home'
import { useI18next } from 'gatsby-plugin-react-i18next'

export default function IndexPage() {
  const { t } = useI18next()
  const location = t('location')!

  return (
    <Layout location={location} special>
      <Seo title={location} />
      <div className="flex min-h-screen flex-col scroll-smooth bg-primary font-prose font-medium text-gray-800 opacity-[99%] dark:bg-navy dark:text-white">
        <HeroBanner />
        <CompanyCTA />
        <ProductsCTA />
        <ContactsCTA />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["index", "common"] }, language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
