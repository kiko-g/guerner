import React, { useState } from 'react'
import classNames from 'classnames'
import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { strIncludes } from '../../../../utils'
import { translations } from '../../../../config'
import { useLanguage } from '../../../../hooks/useLanguageContext'
import { Layout } from '../../../../components/layout'
import { Category, Colors } from '../../../../types'
import {
  ColorFilter,
  PinToggler,
  Search,
  ViewToggler,
  CategoryFilter,
  Product,
} from '../../../../components/products'

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
  const { language } = useLanguage()
  const nodes = data.allMarkdownRemark.nodes

  const title = translations[language].phrases.products.agriculture.title
  const text = translations[language].phrases.products.agriculture.text

  const [viewType, setViewType] = useState(false)
  const [pinnedOnly, setPinnedOnly] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [pickedColor, setPickedColor] = useState<Color>('')
  const [pickedCategories, setPickedCategories] = useState<Category[]>([])

  const filter = (product: Frontmatter) => {
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
  }

  return (
    <Layout location="Agricultura">
      <main className="flex flex-col items-center justify-center gap-y-4 py-8 md:gap-y-6 md:py-16">
        <header className="w-full space-y-6">
          <h1 className="text-center text-4xl font-bold tracking-tight">{title}</h1>
          <p className="text-center font-normal lg:text-justify">{text}</p>
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

          {/* Listing */}
          <ul
            className={classNames(
              viewType
                ? 'grid grid-cols-1 gap-x-6 gap-y-6 2xl:grid-cols-2'
                : 'grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-4'
            )}
          >
            {nodes
              .filter((product: MarkdownData) => filter(product.frontmatter))
              .map((productMd: MarkdownData, productIdx: number) => (
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
          featuredImage
        }
      }
    }
  }
`
