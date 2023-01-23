import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useLanguage } from '../../hooks/useLanguageContext'
import { translations } from '../../config'
import { Building, Rays } from '../../images'

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
    <section id={sectionId} className="grid grid-cols-1 overflow-hidden lg:grid-cols-2">
      <div
        className="relative flex flex-col items-center justify-center 
        bg-gradient-to-br from-teal-800 to-teal-600 dark:from-slate-900 dark:to-slate-900"
      >
        <img
          alt="rays"
          src={Rays}
          className="absolute -bottom-24 -left-24 h-auto w-full object-cover opacity-100 dark:opacity-40"
        />
        <div className="mx-auto flex max-w-xl flex-col items-start justify-center gap-y-3 py-8 text-center sm:text-left">
          <article className="z-40 text-white md:mt-4" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>

      <img alt="Building" src={Building} className="h-48 w-full object-cover lg:h-full" />
    </section>
  )
}
