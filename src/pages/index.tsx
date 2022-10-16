import * as React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Mural } from '../components/home'
import '../styles/home.css'

// See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/

const IndexPage = () => {
  return (
    <Layout location="Home" home>
      <Mural />
    </Layout>
  )
}

export default IndexPage
