import React from 'react'
import { graphql } from 'gatsby'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { Layout } from '../components/layout'
import { History, Presentation, Production, Values, Welcome } from '../components/company'

export default function CompanyPage() {
  const { t } = useI18next()
  const location = t('location')!

  return (
    <Layout location={location} hero fullWidth>
      <Welcome />
      <main>
        <Presentation />
        <Values />
        <History />
        <Production />
      </main>
    </Layout>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["company", "common"] }, language: { eq: $language } }) {
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
