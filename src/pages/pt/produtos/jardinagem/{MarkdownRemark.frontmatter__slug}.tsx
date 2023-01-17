import React from 'react'
import { routes } from '../../../../config'
import { GoBack, Layout } from '../../../../components/layout'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const coverImage = getImage(frontmatter.featuredImage)

  return (
    <Layout location={frontmatter.name}>
      <main className="">
        <header>
          <h1>{frontmatter.name}</h1>
          <div>
            <GoBack url={routes.pt.routes.products.gardening} />
            <span className="date">{frontmatter.date}</span>
          </div>
        </header>

        <article dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        name
        pinned
        slug
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 800, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
          publicURL
          extension
        }
      }
    }
  }
`
