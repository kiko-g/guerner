import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../../components/layout'
import translations from '../../../static/translations.json'

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
  const title = translations.pt.phrases.footer['Privacy Policy']

  return (
    <Layout location="Privacy">
      <main className="flex flex-col items-center justify-center gap-y-4 py-8 md:gap-y-6 md:py-16">
        <header className="w-full space-y-6">
          <h1 className="text-center text-4xl font-bold tracking-tight">{title}</h1>
        </header>

        <article dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.nodes[0].html }} />
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(politica-de-privacidade)/" } }) {
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
