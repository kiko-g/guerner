import React from 'react'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { Layout } from '../components/layout'
import { FeaturedAgriculture, FeaturedConstruction, FeaturedOthers } from '../components/products'
import { graphql } from 'gatsby'

export default function ProductsPage() {
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
        <FeaturedAgriculture />
        <FeaturedConstruction />
        <FeaturedOthers />
      </main>
    </Layout>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["products", "common"] }, language: { eq: $language } }
    ) {
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
