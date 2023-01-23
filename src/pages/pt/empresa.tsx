import React from 'react'
import { translations } from '../../config'
import { useLanguage } from '../../hooks/useLanguageContext'
import { Layout } from '../../components/layout'
import { Presentation, Production, Welcome } from '../../components/company'

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

  return (
    <Layout location={location} special>
      <Welcome />
      <main>
        <Presentation />
        <Production />
      </main>
    </Layout>
  )
}
