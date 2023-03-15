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
    <section id={sectionId} className="grid grid-cols-1 overflow-hidden lg:grid-cols-2">
      <div
        className="relative flex flex-col items-center justify-center 
        bg-gradient-to-br from-teal-800 to-teal-600 dark:from-slate-900 dark:to-slate-900"
      >
        <div className="mx-auto flex max-w-xl flex-col items-start justify-center gap-y-3 py-8 text-center sm:text-left">
          <article
            className="article z-40 text-white md:mt-4"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>

      <img alt="Building" src={Building} className="h-48 w-full object-cover lg:h-full" />
    </section>
  )
}
