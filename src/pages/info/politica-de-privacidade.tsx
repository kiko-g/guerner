import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../../components/layout'
import { translations } from '../../config'
import { useLanguage } from '../../hooks/useLanguageContext'

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
  const { language } = useLanguage()

  const title = translations[language].footer.privacy
  const info = data.allMarkdownRemark.nodes.find(node => node.frontmatter.lang === 'pt')!

  return (
    <Layout location="Privacy">
      <main className="flex flex-col items-center justify-center gap-y-4 py-8 md:gap-y-6 md:py-16">
        <header className="w-full space-y-6">
          <h1 className="text-center text-4xl font-bold tracking-tight">{title}</h1>
        </header>

        <article dangerouslySetInnerHTML={{ __html: info.html }} />
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
