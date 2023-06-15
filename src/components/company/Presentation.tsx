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
    <section id={sectionId} className="flex flex-col py-12 text-white md:py-20">
      <div className="flex flex-col items-center justify-center px-4 py-16">
        <h3 className="mb-4 text-center text-3xl font-semibold tracking-tighter md:mb-6 md:text-4xl">
          {t('who')}
        </h3>
        <article
          dangerouslySetInnerHTML={{ __html: html }}
          className="article z-40 mx-auto flex max-w-2xl flex-col items-start justify-center text-center text-sm sm:text-left md:text-base"
        />
      </div>

      <div className="mx-auto mt-6 flex max-w-4xl flex-col items-center justify-center px-4 lg:px-0">
        <h3 className="mb-4 text-center text-3xl font-semibold tracking-tighter md:mb-6 md:text-4xl">
          {t('offices')}
        </h3>
        <img alt="Building" src={Building} className="h-full rounded-3xl object-cover shadow-xl" />
      </div>
    </section>
  )
}
