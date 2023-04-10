import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Building } from '../../images'
import { useI18next } from 'gatsby-plugin-react-i18next'

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
  const { t, language } = useI18next()
  const sectionId = t('sectionIdPresentation')

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
    <section
      id={sectionId}
      className="grid grid-cols-1 overflow-hidden pt-12 md:pt-20 lg:grid-cols-2"
    >
      <div className="relative flex flex-col items-center justify-center bg-teal-700/50 px-4 py-16 text-white dark:bg-gray-700">
        <h2 className="mb-3 text-4xl font-semibold tracking-tight">{t('who')}</h2>
        <article
          dangerouslySetInnerHTML={{ __html: html }}
          className="article z-40 mx-auto mt-4 flex max-w-xl flex-col items-start justify-center gap-y-3 text-center sm:text-left md:mt-8"
        />
      </div>

      <img alt="Building" src={Building} className="h-48 w-full object-cover lg:h-full" />
    </section>
  )
}
