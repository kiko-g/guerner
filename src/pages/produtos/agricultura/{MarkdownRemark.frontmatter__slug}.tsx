import React from 'react'
import { Layout } from '../../../components/layout'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const coverImage = getImage(frontmatter.featuredImage)

  return (
    <Layout location={frontmatter.title}>
      <main className="">
        <header>
          <h1>{frontmatter.title}</h1>
          <div>
            <GoBack />
            <span className="date">{frontmatter.date}</span>
          </div>
        </header>

        <article dangerouslySetInnerHTML={{ __html: html }} />

        <footer>
          <span>{frontmatter.title}</span>
          <span>{frontmatter.date}</span>
        </footer>
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

const GoBack = () => (
  <Link
    to="/produtos/agricultura"
    className="flex rounded-full text-sm font-semibold text-gray-700 transition hover:opacity-75 dark:text-tertiary"
  >
    <svg viewBox="0 -7 3 24" className="mr-2.5 h-6 w-auto overflow-visible">
      <path
        d="M3 0L0 3L3 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
    Voltar
  </Link>
)
