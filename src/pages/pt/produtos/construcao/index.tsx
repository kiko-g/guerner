import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'
import { translations } from '../../../../config'
import { useLanguage } from '../../../../hooks/useLanguageContext'
import { Layout } from '../../../../components/layout'
import { ViewToggler } from '../../../../components/products'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

type MarkdownData = {
  html: string
  frontmatter: {
    lang: string
  }
}

type Props = {
  data: {
    allMarkdownRemark: {
      nodes: MarkdownData[]
    }
  }
}

export default function ProductsConstructionPage({ data }: Props) {
  const { language } = useLanguage()
  const nodes = data.allMarkdownRemark.nodes
  const location = translations[language].location.products.construction
  const title = translations[language].phrases.products.construction.title
  const text = translations[language].phrases.products.construction.text

  const [viewType, setViewType] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <Layout location={location}>
      <main className="flex flex-col items-center justify-center gap-y-4 py-8 md:gap-y-6 md:py-16">
        <header className="w-full space-y-6">
          <h1 className="text-center text-4xl font-bold tracking-tight">{title}</h1>
          <p className="text-center font-normal lg:text-justify">{text}</p>
        </header>

        <div className="flex w-full flex-col gap-y-6">
          {/* Filters */}
          <div className="flex items-center justify-between gap-x-2">
            <ViewToggler hook={[viewType, setViewType]} />
            <input
              type="search"
              id="searchProduct"
              name="searchProduct"
              title="Enter your search string here"
              placeholder="Search"
              className=""
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Listing */}
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {nodes.map((product: any, productIdx: any) => (
              <li key={`product-${productIdx}`}>
                <Link
                  to={product.frontmatter.slug}
                  className="group block overflow-hidden rounded transition hover:opacity-80"
                >
                  <img
                    alt={`product-${productIdx}`}
                    src={
                      product.frontmatter.featuredImage.childImageSharp.gatsbyImageData.images
                        .fallback.src
                    }
                    className="h-[350px] w-full overflow-hidden object-cover transition 
                      duration-500 sm:h-[450px]"
                  />

                  <div className="flex items-center justify-between bg-white px-3 py-2">
                    <span className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      {product.frontmatter.name}
                    </span>
                    <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                  </div>
                </Link>
              </li>
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
      sort: [{ frontmatter: { pinned: DESC } }, { frontmatter: { name: ASC } }]
      filter: { fileAbsolutePath: { regex: "/(construction)/" } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 80)
        frontmatter {
          name
          slug
          pinned
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
