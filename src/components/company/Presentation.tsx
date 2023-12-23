import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { StaticImage } from 'gatsby-plugin-image'

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
    <section id={sectionId} className="flex flex-col py-12 text-white lg:py-20">
      <div className="rounded-0 mx-auto flex max-w-4xl flex-col items-center justify-center bg-black/20 px-16 py-16 dark:bg-white/[4%] lg:rounded-xl">
        <h3 className="mb-4 text-center text-3xl font-semibold tracking-tighter lg:mb-6 lg:text-4xl">
          {t('who')}
        </h3>
        <article
          dangerouslySetInnerHTML={{ __html: html }}
          className="article z-40 mx-auto flex max-w-2xl flex-col items-start justify-center text-center text-sm sm:text-left lg:text-base"
        />
      </div>

      <div className="mx-auto mt-32 flex max-w-4xl flex-col items-center justify-center px-4 lg:px-0">
        <h3 className="mb-4 text-center text-3xl font-semibold tracking-tighter lg:mb-6 lg:text-4xl">
          {t('offices')}
        </h3>
        <StaticImage
          alt="Building"
          src="../../images/building.webp"
          placeholder="blurred"
          className="h-full rounded-3xl object-cover shadow-xl"
        />
      </div>
    </section>
  )
}
