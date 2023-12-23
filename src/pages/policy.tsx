import React from 'react'
import { graphql } from 'gatsby'
import { Layout, Seo } from '../components/layout'
import { useI18next } from 'gatsby-plugin-react-i18next'

type MarkdownData = {
  html: string
  frontmatter: {
    lang: string
  }
}

type Props = {
  data: {
    allMarkdownRemark: {
      nodes: MarkdownData[]
    }
  }
}

export default function PrivacyPolicy({ data }: Props) {
  const { t, language } = useI18next()

  const title = t('title')
  const location = t('location')!
  const info = data.allMarkdownRemark.nodes.find(node => node.frontmatter.lang === language)!

  return (
    <Layout location={location}>
      <main className="flex flex-col items-center justify-center gap-y-4 py-8 lg:gap-y-6 lg:py-16">
        <header className="w-full space-y-6">
          <h1 className="text-center text-4xl font-bold tracking-tight">{title}</h1>
        </header>

        <article dangerouslySetInnerHTML={{ __html: info.html }} className="article max-w-5xl" />
      </main>
    </Layout>
  )
}

export const pageAndLanguageQuery = graphql`
  query pageQuery($language: String!) {
    allMarkdownRemark(
      sort: [{ frontmatter: { name: ASC } }]
      filter: { fileAbsolutePath: { regex: "/(policy)/" }, frontmatter: { lang: { eq: $language } } }
    ) {
      nodes {
        id
        html
        frontmatter {
          lang
        }
      }
    }
    locales: allLocale(filter: { ns: { in: ["policy", "common"] }, language: { eq: $language } }) {
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
