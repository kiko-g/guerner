import React, { useState } from 'react'
import classNames from 'classnames'
import { strIncludes } from '../../../utils'
import { Category, Colors } from '../../../types'
import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { Layout } from '../../../components/layout'
import {
  ColorFilter,
  PinToggler,
  Search,
  ViewToggler,
  CategoryFilter,
  Product,
} from '../../../components/products'

type Color = keyof Colors | ''

type Frontmatter = {
  lang: string
  name: string
  slug: string
  pinned: boolean
  color: Color
  category: Category
  featuredImage: IGatsbyImageData
}

type MarkdownData = {
  html: string
  frontmatter: Frontmatter
}

type Props = {
  data: {
    allMarkdownRemark: {
      nodes: MarkdownData[]
    }
  }
}

export default function ProductsAgriculturePage({ data }: Props) {
  const { t, language } = useI18next()

  const location = t('title')
  const title = t('agricultureTitle')
  const description = t('agricultureDescription')

  const [viewType, setViewType] = useState(false)
  const [pinnedOnly, setPinnedOnly] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [pickedColor, setPickedColor] = useState<Color>('')
  const [pickedCategories, setPickedCategories] = useState<Category[]>([])

  const products = data.allMarkdownRemark.nodes.filter((md: MarkdownData) => {
    const product = md.frontmatter
    if (product.lang !== language) return false

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
      <main className="flex flex-col items-center justify-center gap-y-4 py-8 md:gap-y-6 md:py-16">
        <header className="w-full space-y-6">
          <h1 className="text-center text-4xl font-bold tracking-tight">{title}</h1>
          <p className="text-center font-normal lg:text-justify">{description}</p>
        </header>

        <div className="flex w-full flex-col gap-y-6">
          {/* Filters */}
          <div className="flex flex-col items-center justify-between gap-x-3 gap-y-3 lg:flex-row">
            <Search hook={[searchQuery, setSearchQuery]} />
            <div className="flex w-full items-center justify-end gap-x-2 lg:w-auto">
              <CategoryFilter hook={[pickedCategories, setPickedCategories]} />
              <ColorFilter hook={[pickedColor, setPickedColor]} />
              <PinToggler hook={[pinnedOnly, setPinnedOnly]} />
              <ViewToggler hook={[viewType, setViewType]} />
            </div>
          </div>

          {/* Products */}
          <ul
            className={classNames(
              viewType
                ? 'grid grid-cols-1 gap-x-6 gap-y-6 2xl:grid-cols-2'
                : 'grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-4'
            )}
          >
            {products.map((productMd: MarkdownData, productIdx: number) => (
              <Product product={productMd.frontmatter} key={`product-${productIdx}`} />
            ))}
          </ul>
        </div>
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: [{ frontmatter: { name: ASC } }]
      filter: { fileAbsolutePath: { regex: "/(agriculture)/" } }
    ) {
      nodes {
        id
        frontmatter {
          lang
          name
          slug
          pinned
          color
          category
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 800, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  }
`