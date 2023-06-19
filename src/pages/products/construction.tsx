import React, { useState } from 'react'
import classNames from 'classnames'
import { useI18next } from 'gatsby-plugin-react-i18next'
import type { Category, Colors, ProductFrontmatter } from '../../types'
import { strIncludes } from '../../utils'
import { graphql } from 'gatsby'
import { Layout } from '../../components/layout'
import {
  ColorFilter,
  PinToggler,
  Search,
  ViewToggler,
  CategoryFilter,
  Product,
} from '../../components/products'

type Color = keyof Colors | ''

type MarkdownData = {
  html: string
  frontmatter: ProductFrontmatter
}

type Props = {
  data: {
    allMarkdownRemark: {
      nodes: MarkdownData[]
    }
  }
}

export default function ProductsConstructionPage({ data }: Props) {
  const { t } = useI18next()

  const location = t('location')!
  const title = t('title')
  const description = t('description')
  const categoryKeys = ['a', 'b', 'c']

  const [viewType, setViewType] = useState(false)
  const [pinnedOnly, setPinnedOnly] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [pickedColor, setPickedColor] = useState<Color>('')
  const [pickedCategories, setPickedCategories] = useState<Category[]>([])

  const products = data.allMarkdownRemark.nodes.filter((md: MarkdownData) => {
    const product = md.frontmatter

    let textMatch = true
    let colorMatch = true
    let pinnedMatch = true
    let categoryMatch = true

    if (searchQuery !== '') textMatch = strIncludes(product.name, searchQuery)
    if (pickedColor !== '') colorMatch = product.color === pickedColor
    if (pinnedOnly) pinnedMatch = product.pinned

    if (categoryMatch) {
      categoryMatch =
        pickedCategories.length === 0 ? true : pickedCategories.includes(product.category)
    }

    return textMatch && colorMatch && pinnedMatch && categoryMatch
  })

  return (
    <Layout location={location}>
      <main className="flex flex-col items-center justify-center gap-y-4 py-8 lg:gap-y-6 lg:pb-40 lg:pt-16">
        <header className="w-full space-y-6">
          <h1 className="text-center text-4xl font-bold tracking-tight">{title}</h1>
          <p className="text-center font-normal lg:text-justify">{description}</p>
        </header>

        <div className="flex w-full flex-col gap-y-6">
          {/* Filters */}
          <div className="flex flex-col items-center justify-between gap-x-3 gap-y-3 lg:flex-row">
            <Search hook={[searchQuery, setSearchQuery]} />
            <div className="flex w-full items-center justify-end gap-x-2 lg:w-auto">
              <PinToggler hook={[pinnedOnly, setPinnedOnly]} />
              <ViewToggler hook={[viewType, setViewType]} />
            </div>
          </div>

          {/* Products */}
          <div className="flex flex-col">
            <div className="mb-2">
              <p>
                {products.length} {t('resultsFound')}.
              </p>
            </div>

            <ul
              className={classNames(
                'grid gap-x-4 gap-y-4 lg:gap-x-8 lg:gap-y-8',
                viewType
                  ? 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'
                  : 'grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              )}
            >
              {products
                .sort((a, b) => (a.frontmatter.sample < b.frontmatter.sample ? -1 : 1))
                .map((productMd: MarkdownData, productIdx: number) => (
                  <Product product={productMd.frontmatter} key={`product-${productIdx}`} />
                ))}
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export const pageAndLanguageQuery = graphql`
  query pageQuery($language: String!) {
    allMarkdownRemark(
      sort: [{ frontmatter: { name: ASC } }]
      filter: {
        fileAbsolutePath: { regex: "/(construction)/" }
        frontmatter: { lang: { eq: $language } }
      }
    ) {
      nodes {
        id
        frontmatter {
          lang
          pinned
          slug

          name
          sector
          sample
          description
          color
          category
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 800, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
          dimensions
          characteristics
          customizable
          customizableText
          benefits
          specifications
          comp
        }
      }
    }
    locales: allLocale(
      filter: { ns: { in: ["construction", "common"] }, language: { eq: $language } }
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
