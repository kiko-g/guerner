import React, { useState } from 'react'
import classNames from 'classnames'
import { Link, graphql } from 'gatsby'
import { Layout } from '../../../../components/layout'
import { strIncludes, tx } from '../../../../utils'
import {
  ColorFilter,
  PinToggler,
  Search,
  ViewToggler,
  CategoryFilter,
} from '../../../../components/products'
import { ArrowTopRightOnSquareIcon, PaintBrushIcon, StarIcon } from '@heroicons/react/24/solid'

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

const ProductsAgriculturePagePT = ({ data }: Props) => {
  const nodes = data.allMarkdownRemark.nodes

  const title = `Agricultura`
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet urna lacinia, facilisis risus ac, commodo neque. Phasellus vel dignissim diam. Nullam convallis nunc in porttitor bibendum. Mauris eu laoreet diam. Aliquam suscipit cursus augue eu efficitur. Praesent eu sodales purus. Donec nec odio semper, faucibus nisi a, varius sem. Nam viverra ultrices pharetra. Curabitur eget tortor ultrices, molestie erat et, varius enim. Aenean sit amet ligula vel erat dictum accumsan. Phasellus ornare dictum sodales.`

  const [viewType, setViewType] = useState(false)
  const [pinnedOnly, setPinnedOnly] = useState(false)
  const [pickedColor, setPickedColor] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [pickedCategories, setPickedCategories] = useState<string[]>([])

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
              .filter((product: any) => {
                let textMatch = true
                let colorMatch = true
                let pinnedMatch = true
                let categoryMatch = true

                if (searchQuery !== '') {
                  textMatch = strIncludes(product.frontmatter.name, searchQuery)
                }

                if (pickedColor !== '') {
                  colorMatch = product.frontmatter.color === pickedColor
                }

                if (pinnedOnly) {
                  pinnedMatch = product.frontmatter.pinned
                }

                if (categoryMatch) {
                  categoryMatch =
                    pickedCategories.length === 0
                      ? true
                      : pickedCategories.includes(product.frontmatter.category)
                }

                return textMatch && colorMatch && pinnedMatch && categoryMatch
              })
              .map((product: any, productIdx: any) => (
                <li key={`product-${productIdx}`} className="group relative">
                  {/* Floating top left */}
                  <div className="absolute top-3 left-3 z-10 flex items-center justify-center gap-x-1.5">
                    {product.frontmatter.color ? (
                      <div
                        className={classNames('rounded-full p-1 shadow', product.frontmatter.color)}
                      >
                        <PaintBrushIcon className="h-4 w-4 text-white" />
                      </div>
                    ) : null}

                    {product.frontmatter.pinned ? (
                      <div className="rounded-full bg-gradient-to-br from-teal-400 via-indigo-400 to-violet-700 p-1 shadow">
                        <StarIcon className="h-4 w-4 text-white" />
                      </div>
                    ) : null}
                  </div>

                  {/* Floating top right */}
                  <div className="absolute top-3 right-3 z-10 flex items-center justify-center gap-x-1.5">
                    {product.frontmatter.category ? (
                      <div className="rounded-md bg-slate-800 px-2 py-1 text-xs text-white shadow">
                        {tx('category', product.frontmatter.category, 'pt')}
                      </div>
                    ) : (
                      <div className="rounded-md bg-slate-800 px-2 py-1 text-xs text-rose-500 shadow">
                        N/A
                      </div>
                    )}
                  </div>

                  {/* Card body */}
                  <Link
                    to={product.frontmatter.slug}
                    className="block h-60 w-full overflow-hidden rounded-t-xl"
                  >
                    <img
                      alt={`product-${productIdx}`}
                      src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
                      className="duration-400 aspect-square h-full w-full object-cover transition hover:scale-110 hover:opacity-80"
                    />
                  </Link>

                  {/* Card footer */}
                  <div
                    className="flex w-full flex-col gap-y-2 rounded-b-xl bg-white 
                    px-3.5 py-2 font-normal dark:bg-white/10"
                  >
                    {/* Top line */}
                    <div className="flex items-center justify-between text-sm font-bold">
                      <Link
                        to={product.frontmatter.slug}
                        className="transition hover:text-primary hover:underline hover:opacity-90 dark:hover:text-secondary"
                      >
                        {product.frontmatter.name}
                      </Link>
                      <Link to={product.frontmatter.slug}>
                        <ArrowTopRightOnSquareIcon className="h-6 w-6 text-primary transition hover:opacity-75 dark:text-secondary" />
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </main>
    </Layout>
  )
}

export default ProductsAgriculturePagePT

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: [{ frontmatter: { name: ASC } }]
      filter: { fileAbsolutePath: { regex: "/(agriculture)/" } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 80)
        frontmatter {
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
