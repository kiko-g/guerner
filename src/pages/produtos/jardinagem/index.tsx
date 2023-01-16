import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'
import { Layout } from '../../../components/layout'
import { ViewToggler } from '../../../components/products'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

const ProductsGardeningPagePT = ({
  data: {
    allMarkdownRemark: { nodes },
  },
}) => {
  const title = `Jardinagem`
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet urna lacinia, facilisis risus ac, commodo neque. Phasellus vel dignissim diam. Nullam convallis nunc in porttitor bibendum. Mauris eu laoreet diam. Aliquam suscipit cursus augue eu efficitur. Praesent eu sodales purus. Donec nec odio semper, faucibus nisi a, varius sem. Nam viverra ultrices pharetra. Curabitur eget tortor ultrices, molestie erat et, varius enim. Aenean sit amet ligula vel erat dictum accumsan. Phasellus ornare dictum sodales.`

  const [viewType, setViewType] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <Layout location="Jardinagem">
      <main className="flex flex-col items-center justify-center gap-y-4 py-8 md:gap-y-6 md:py-16">
        <header className="w-full space-y-6">
          <h1 className="text-center text-4xl font-bold tracking-tight">{title}</h1>
          <p className="text-left font-normal md:text-justify">{text}</p>
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
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
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

export default ProductsGardeningPagePT

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: [{ frontmatter: { pinned: DESC } }, { frontmatter: { name: ASC } }]
      filter: { fileAbsolutePath: { regex: "/(jardinagem)/" } }
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
