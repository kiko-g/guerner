import React from 'react'
import { translations } from '../../../config'
import { useLanguage } from '../../../hooks/useLanguageContext'
import { Layout } from '../../../components/layout'
import { FeaturedAgriculture, FeaturedConstruction } from '../../../components/products'

const ProductsPagePT = () => {
  const { language } = useLanguage()

  const title = translations[language].phrases.products.header
  const pageText = translations[language].phrases.products.pageText

  return (
    <Layout location="Produtos">
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

export default ProductsPagePT
