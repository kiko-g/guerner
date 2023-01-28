import React from 'react'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { Layout } from '../../components/layout'
import { FeaturedAgriculture, FeaturedConstruction } from '../../components/products'

export default function ProductsPage() {
  const { t } = useI18next()
  const location = t('title')

  const title = t('productsHeader')
  const pageText = t('productsDescription')

  return (
    <Layout location={location}>
      <main className="flex flex-col items-center justify-center gap-y-4 py-8 md:gap-y-6 md:py-16">
        <header className="w-full space-y-6">
          <h1 className="text-center text-4xl font-bold tracking-tight">{title}</h1>
          <p className="text-center font-normal lg:text-justify">{pageText}</p>
        </header>
        <FeaturedAgriculture />
        <FeaturedConstruction />
      </main>
    </Layout>
  )
}
