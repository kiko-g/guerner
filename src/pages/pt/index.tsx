import React from 'react'
import { Layout } from '../../components/layout'
import { HeroBanner, HeroCompany } from '../../components/home'

const IndexPagePT = () => {
  // See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
  return (
    <Layout location="Início" home>
      <div className="">
        <HeroBanner />
        <HeroCompany />
      </div>
    </Layout>
  )
}

export default IndexPagePT
