import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../../components/layout'
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

  const title = t('privacy-policy')
  const info = data.allMarkdownRemark.nodes.find(node => node.frontmatter.lang === language)!

  return (
    <Layout location="Privacy">
      <main className="flex flex-col items-center justify-center gap-y-4 py-8 md:gap-y-6 md:py-16">
        <header className="w-full space-y-6">
          <h1 className="text-center text-4xl font-bold tracking-tight">{title}</h1>
        </header>

        <article dangerouslySetInnerHTML={{ __html: info.html }} className="article" />
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(privacy-policy)/" } }) {
      nodes {
        id
        html
        frontmatter {
          lang
        }
      }
    }
  }
`
