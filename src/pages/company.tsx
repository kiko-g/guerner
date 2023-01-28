import React from 'react'
import { graphql } from 'gatsby'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { Layout } from '../components/layout'
import { Presentation, Production, Welcome } from '../components/company'

export default function CompanyPage() {
  const { t } = useI18next()
  const location = t('location')!

  return (
    <Layout location={location} special>
      <Welcome />
      <main>
        <Presentation />
        <Production />
      </main>
    </Layout>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["company"] }, language: { eq: $language } }) {
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