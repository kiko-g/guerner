import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useLanguage } from '../../hooks/useLanguageContext'
import { translations } from '../../config'
import { Building } from '../../images'

type Frontmatter = {
  lang: string
}

type MarkdownData = {
  html: string
  frontmatter: Frontmatter
}

type Data = {
  allMarkdownRemark: {
    nodes: MarkdownData[]
  }
}

type Props = {}

export default function Presentation({}: Props) {
  const { language } = useLanguage()
  const sectionId = translations[language].phrases.company.sectionIds.presentation

  const data: Data = useStaticQuery(graphql`
    query PresentationQuery {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(company.*/presentation)/" } }) {
        nodes {
          id
          html
          frontmatter {
            lang
          }
        }
      }
    }
  `)

  const html = data.allMarkdownRemark.nodes.find(node => node.frontmatter.lang === language)!.html

  return (
    <section id={sectionId} className="grid grid-cols-1 overflow-hidden bg-gray-50 lg:grid-cols-2">
      <div className="relative flex items-center justify-center bg-cta bg-cover px-8 dark:bg-cta-dark md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-xl flex-col items-start justify-center gap-y-3 py-8 text-center sm:text-left">
          <article className="text-center md:mt-4" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <div className="bottom-0 z-50 hidden h-2 w-full bg-gradient-to-r from-primary to-secondary lg:absolute" />
      </div>

      <img alt="Building" src={Building} className="h-48 w-full object-cover lg:h-full" />
    </section>
  )
}
