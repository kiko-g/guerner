import React from 'react'
import { Layout } from '../components/layout'
import { HeroBanner, HeroCompany } from '../components/home'

// See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/

const IndexPage = () => {
  return (
    <Layout location="Início" home>
      <HeroBanner />
      <HeroCompany />
    </Layout>
  )
}

export default IndexPage
