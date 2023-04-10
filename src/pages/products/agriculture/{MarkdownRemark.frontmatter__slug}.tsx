import React from 'react'
import { graphql } from 'gatsby'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { GoBack, Layout } from '../../../components/layout'
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image'
import '../../../styles/product.css'
import classNames from 'classnames'

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
    description: string
    characteristics: string[]
    featuredImage: IGatsbyImageData
  }
}

type Props = {
  data: {
    markdownRemark: MarkdownData
  }
}

export default function AgricultureProductTemplate({ data }: Props) {
  const { t } = useI18next()

  const routeGoBack = '/products/agriculture'
  const { frontmatter, html } = data.markdownRemark
  const coverImage = getImage(frontmatter.featuredImage)

  return (
    <Layout location={frontmatter.name}>
      <main className="product">
        <header>
          <GoBack url={routeGoBack} />
          <h1>{frontmatter.name}</h1>
        </header>

        <div className="showcase">
          {coverImage ? (
            <GatsbyImage
              image={coverImage}
              alt="product-cover"
              className="col-span-1 h-full w-full rounded object-cover lg:col-span-3"
            />
          ) : null}
          <div className="col-span-1 flex flex-col gap-y-1 lg:col-span-2">
            <ul>
              <li className="flex items-center">
                <strong>Cor:&nbsp;</strong>
                <span>{frontmatter.color}&nbsp;</span>
                <div className={classNames('mt-[1px] h-3 w-3 rounded-full', frontmatter.color)} />
              </li>
              <li>
                <strong>Destaque:&nbsp;</strong>
                <span>{frontmatter.pinned === true ? 'Sim' : 'Não'}</span>
              </li>
              <li>
                <strong>Categoria:&nbsp;</strong>
                <span>{t(`categories-${frontmatter.category}`)}</span>
              </li>
            </ul>

            <p className="mt-1">{frontmatter.description}</p>

            {frontmatter.characteristics ? (
              <ul className="mt-2 flex flex-col gap-y-2">
                {frontmatter.characteristics.map((characteristic, chracteristicIdx) => (
                  <li
                    className="flex items-center gap-x-2 font-lexend uppercase tracking-tight"
                    key={`chracteristic-${chracteristicIdx}`}
                  >
                    <span className="h-6 w-1 rounded bg-primary dark:bg-tertiary" />
                    <span>{characteristic}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <section dangerouslySetInnerHTML={{ __html: html }} className="content" />
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($language: String!, $id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        name
        slug
        pinned
        color
        category
        description
        characteristics
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 800, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
    locales: allLocale(filter: { ns: { in: ["common"] }, language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
