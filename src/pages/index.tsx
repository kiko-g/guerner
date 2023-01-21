// See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
import React from 'react'
import { Layout } from '../components/layout'
import { HeroBanner, CompanyCTA, ContactsCTA, ProductsCTA } from '../components/home'

const IndexPagePT = () => {
  return (
    <Layout location="Início" home>
      <HeroBanner />
      <CompanyCTA />
      <ProductsCTA />
      <ContactsCTA />
    </Layout>
  )
}

export default IndexPagePT
