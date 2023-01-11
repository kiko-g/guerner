import * as React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Mural } from '../components/home'

// See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/

const IndexPagePT = () => {
  return (
    <Layout location="Início" language="pt" home>
      <div className=""></div>
    </Layout>
  )
}

export default IndexPagePT
