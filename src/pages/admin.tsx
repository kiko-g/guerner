import React from 'react'
import { graphql } from 'gatsby'
import { Layout, Seo } from '../components/layout'
import { useI18next } from 'gatsby-plugin-react-i18next'

export default function IndexPage() {
  const { t } = useI18next()
  const location = t('location')
  const title = t('title')
  const description = t('description')

  return (
    <Layout location={location}>
      <main className="flex flex-col items-center justify-center gap-y-4 py-8 lg:gap-y-8 lg:pb-40 lg:pt-16">
        <header className="w-full space-y-6">
          <h1 className="text-center text-4xl font-bold tracking-tight">{title}</h1>
          <p className="text-center font-normal lg:text-justify">{description}</p>
        </header>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["admin", "common"] }, language: { eq: $language } }) {
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
