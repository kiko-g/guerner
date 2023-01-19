import React from 'react'
import { routes } from '../../../../config'
import { GoBack, Layout } from '../../../../components/layout'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image'

type MarkdownData = {
  html: string
  frontmatter: {
    lang: string
    name: string
    slug: string
    date: string
    color: string
    pinned: boolean
    category: string
    featuredImage: IGatsbyImageData
  }
}

type Props = {
  data: {
    markdownRemark: MarkdownData
  }
}

export default function Template({ data }: Props) {
  const { frontmatter, html } = data.markdownRemark
  const coverImage = getImage(frontmatter.featuredImage)

  return (
    <Layout location={frontmatter.name}>
      <main className="">
        <header>
          <h1>{frontmatter.name}</h1>
          <div>
            <GoBack url={routes.pt.products.gardening} />
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
        slug
        pinned
        color
        category
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