import * as React from 'react'
import { Layout } from '../components/layout'
import { HeroBanner } from '../components/home'

const IndexPagePT = () => {
  // See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
  return (
    <Layout location="Início" home>
      <div className="">
        <HeroBanner />
      </div>
    </Layout>
  )
}

export default IndexPagePT
