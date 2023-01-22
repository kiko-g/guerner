import React from 'react'
import { translations } from '../../config'
import { useLanguage } from '../../hooks/useLanguageContext'
import { Layout } from '../../components/layout'
import { graphql } from 'gatsby'

type Frontmatter = {
  lang: string
}

type MarkdownData = {
  html: string
  frontmatter: Frontmatter
}

type Props = {
  data: {
    allMarkdownRemark: {
      nodes: MarkdownData[]
    }
  }
}

export default function CompanyPage({ data }: Props) {
  const { language } = useLanguage()

  const location = translations[language].location.company
  const title = translations[language].phrases.company.title
  const pageText = translations[language].phrases.company.text

  const nodes = data.allMarkdownRemark.nodes.filter((md: MarkdownData) => {
    const product = md.frontmatter

    return product.lang === language
  })

  return (
    <Layout location={location}>
      <main className="flex flex-col items-center justify-center gap-y-4 py-8 md:gap-y-6 md:py-16">
        <header className="w-full space-y-6">
          <h1 className="text-center text-4xl font-bold tracking-tight">{title}</h1>
          <p className="text-center font-normal lg:text-justify">{pageText}</p>
        </header>

        {/*  */}
        <div></div>
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: [{ frontmatter: { name: ASC } }]
      filter: { fileAbsolutePath: { regex: "/(company)/" } }
    ) {
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
