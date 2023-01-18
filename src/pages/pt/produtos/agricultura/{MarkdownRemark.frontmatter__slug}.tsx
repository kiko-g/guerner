import React from 'react'
import { routes } from '../../../../config'
import { GoBack, Layout } from '../../../../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

type Props = {
  data: any
}

export default function Template({ data }: Props) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const coverImage = getImage(frontmatter.featuredImage)

  return (
    <Layout location={frontmatter.name}>
      <main className="mx-auto flex max-w-xl flex-col items-center justify-center gap-y-4 py-8 font-normal md:gap-y-6 md:py-16">
        <header className="flex w-full items-center justify-between">
          <GoBack url={routes.pt.products.agriculture} />
          <h1 className="text-lg font-bold tracking-tight">Agricultura</h1>
        </header>

        <div className="flex w-full gap-4 rounded-xl bg-white p-4 dark:bg-white/10">
          {coverImage ? (
            <GatsbyImage image={coverImage} alt="product-cover" className="rounded" />
          ) : null}
          <ul className="whitespace-nowrap pr-16 text-sm">
            <li>
              Destaque:{' '}
              <span className="font-bold">{frontmatter.pinned === true ? 'Sim' : 'Não'}</span>
            </li>
            <li>
              Nome: <span className="font-bold">{frontmatter.name}</span>
            </li>
            <li>
              Cor: <span className="font-bold">{frontmatter.color}</span>
            </li>
            <li>
              Categoria: <span className="font-bold">{frontmatter.category}</span>
            </li>
          </ul>
        </div>

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
