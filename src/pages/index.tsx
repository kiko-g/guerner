import React from 'react'
import { Layout } from '../components/layout'
import { HeroBanner, CompanyCTA } from '../components/home'

// See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/

const IndexPage = () => {
  return (
    <Layout location="Início" home>
      <HeroBanner />
      <CompanyCTA />
    </Layout>
  )
}

export default IndexPage
