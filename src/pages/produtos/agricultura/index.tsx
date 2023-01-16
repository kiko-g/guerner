import React, { useState } from 'react'
import classNames from 'classnames'
import { Link, graphql } from 'gatsby'
import { Layout } from '../../../components/layout'
import { strIncludes, tx } from '../../../utils'
import { ColorFilter, PinToggler, Search, ViewToggler } from '../../../components/products'
import { ArrowTopRightOnSquareIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'

const ProductsAgriculturePagePT = ({
  data: {
    allMarkdownRemark: { nodes },
  },
}) => {
  const title = `Agricultura`
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet urna lacinia, facilisis risus ac, commodo neque. Phasellus vel dignissim diam. Nullam convallis nunc in porttitor bibendum. Mauris eu laoreet diam. Aliquam suscipit cursus augue eu efficitur. Praesent eu sodales purus. Donec nec odio semper, faucibus nisi a, varius sem. Nam viverra ultrices pharetra. Curabitur eget tortor ultrices, molestie erat et, varius enim. Aenean sit amet ligula vel erat dictum accumsan. Phasellus ornare dictum sodales.`
  const colorPreText = `Cor`
  const categoryPreText = `Categoria`

  const [viewType, setViewType] = useState(false)
  const [pinnedOnly, setPinnedOnly] = useState(false)
  const [pickedColor, setPickedColor] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <Layout location="Agricultura">
      <main className="flex flex-col items-center justify-center gap-y-4 py-8 md:gap-y-6 md:py-16">
        <header className="w-full space-y-6">
          <h1 className="text-center text-4xl font-bold tracking-tight">{title}</h1>
          <p className="text-left font-normal md:text-justify">{text}</p>
        </header>

        <div className="flex w-full flex-col gap-y-6">
          {/* Filters */}
          <div className="flex items-center justify-between gap-x-3">
            <Search hook={[searchQuery, setSearchQuery]} />
            <ColorFilter hook={[pickedColor, setPickedColor]} />
            <PinToggler hook={[pinnedOnly, setPinnedOnly]} />
            <ViewToggler hook={[viewType, setViewType]} />
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

                if (searchQuery !== '') {
                  textMatch = strIncludes(product.frontmatter.name, searchQuery)
                }

                if (pickedColor !== '') {
                  colorMatch = product.frontmatter.color === pickedColor
                }

                if (pinnedOnly) {
                  pinnedMatch = product.frontmatter.pinned
                }

                return textMatch && colorMatch && pinnedMatch
              })
              .map((product: any, productIdx: any) => (
                <li key={`product-${productIdx}`} className="group relative">
                  {/* Floating items */}
                  {product.frontmatter.pinned ? (
                    <div className="absolute top-2 left-2 z-10 rounded-full bg-primary p-1 shadow dark:bg-secondary">
                      <StarIcon className="h-5 w-5 text-white" />
                    </div>
                  ) : null}

                  {/* Card body */}
                  <Link
                    to={product.frontmatter.slug}
                    className="block h-60 w-full overflow-hidden rounded-t-xl"
                  >
                    <img
                      alt={`product-${productIdx}`}
                      src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
                      className="duration-400 aspect-square h-full w-full 
                      object-cover transition hover:scale-110 hover:opacity-80"
                    />
                  </Link>

                  {/* Card footer */}
                  <div
                    className="flex w-full flex-col gap-y-2 rounded-b-xl bg-white 
                    px-3.5 py-2 font-normal dark:bg-white/10"
                  >
                    {/* Top line */}
                    <div className="flex items-center justify-between">
                      <Link
                        to={product.frontmatter.slug}
                        className="underline transition hover:text-primary hover:opacity-80 dark:hover:text-secondary"
                      >
                        {product.frontmatter.name}
                      </Link>
                      <Link to={product.frontmatter.slug}>
                        <ArrowTopRightOnSquareIcon className="h-6 w-6 text-primary transition hover:opacity-80 dark:text-secondary" />
                      </Link>
                    </div>

                    {/* Bottom line */}
                    <div className="flex items-center justify-between text-sm">
                      {/* Color */}
                      <div className="flex items-center gap-x-1">
                        <span>{colorPreText}</span>
                        {product.frontmatter.color ? (
                          <span
                            className={classNames(
                              product.frontmatter.color.toLowerCase(),
                              'h-4 w-4 rounded-full shadow'
                            )}
                          />
                        ) : (
                          <span className="font-bold text-red-700 dark:text-rose-500">N/A</span>
                        )}
                      </div>

                      {/* Category */}
                      <div>
                        <span>{categoryPreText}: </span>
                        {product.frontmatter.category ? (
                          <span className="font-bold">
                            {tx('category', product.frontmatter.category, 'pt')}
                          </span>
                        ) : (
                          <span className="font-bold text-red-700 dark:text-rose-500">N/A</span>
                        )}
                      </div>
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
      filter: { fileAbsolutePath: { regex: "/(agricultura)/" } }
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
