import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../../../components/layout'
import { translations } from '../../../config'

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

export default function TermsAndConditions({ data }: Props) {
  const title = translations.pt.phrases.footer.terms
  const info = data.allMarkdownRemark.nodes.find(node => node.frontmatter.lang === 'pt')!

  return (
    <Layout location="Terms">
      <main className="flex flex-col items-center justify-center py-8 gap-y-4 md:gap-y-6 md:py-16">
        <header className="w-full space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-center">{title}</h1>
        </header>

        <article dangerouslySetInnerHTML={{ __html: info.html }} />
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(terms-and-conditions)/" } }) {
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
