import * as React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/

const ProductsPagePT = () => {
  return (
    <Layout location="Produtos" language="pt">
      <div className="bg-red-400"></div>
    </Layout>
  )
}

export default ProductsPagePT
