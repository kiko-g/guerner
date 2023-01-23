import React from 'react'
import { translations } from '../../config'
import { useLanguage } from '../../hooks/useLanguageContext'
import { graphql, useStaticQuery } from 'gatsby'
import { Tab } from '@headlessui/react'
import { IGatsbyImageData, getImage, GatsbyImage } from 'gatsby-plugin-image'
import classNames from 'classnames'

type Frontmatter = {
  lang: string
  facilitiesNames: string[]
  facilitiesImages: IGatsbyImageData[]
  facilitiesDescriptions: string[]
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

export default function Production({}: Props) {
  const { language } = useLanguage()
  const sectionId = translations[language].phrases.company.sectionIds.production

  const data: Data = useStaticQuery(graphql`
    query ProductionQuery {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(company.*/production)/" } }) {
        nodes {
          id
          html
          frontmatter {
            lang
            facilitiesNames
            facilitiesImages {
              childImageSharp {
                gatsbyImageData(width: 800, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
              }
            }
            facilitiesDescriptions
          }
        }
      }
    }
  `)

  const node = data.allMarkdownRemark.nodes.find(node => node.frontmatter.lang === language)
  const html = node!.html
  const tabList = node!.frontmatter.facilitiesNames
  const tabImages = node!.frontmatter.facilitiesImages
  const tabDescriptions = node!.frontmatter.facilitiesDescriptions

  return (
    <section
      id={sectionId}
      className="relative overflow-hidden bg-teal-600 pt-20 pb-28 dark:bg-teal-800 sm:py-32"
    >
      <Tab.Group>
        <Tab.List className="flex justify-center gap-x-6">
          {tabList.map((tab: string, tabIdx: number) => (
            <Tab
              key={`tab-${tabIdx}`}
              className={({ selected }) =>
                classNames(
                  selected ? 'bg-teal-200/50' : '',
                  'rounded px-2 py-1 text-white transition hover:bg-teal-200/20'
                )
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-10">
          {tabImages.map((tabImage: IGatsbyImageData, tabIdx: number) => {
            const gatsbyImage = getImage(tabImage)

            return (
              <Tab.Panel key={`tab-panel-${tabIdx}`}>
                <div className="flex flex-col items-center justify-center gap-y-4 text-center lg:gap-y-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    Centro de {tabList[tabIdx]}
                  </h2>
                  <p className="mx-auto max-w-3xl text-lg text-teal-200">
                    {tabDescriptions[tabIdx]}
                  </p>
                  {gatsbyImage ? (
                    <GatsbyImage
                      image={gatsbyImage}
                      alt={tabList[tabIdx]}
                      className="max-w-xl rounded-xl shadow"
                    />
                  ) : null}
                </div>
              </Tab.Panel>
            )
          })}
        </Tab.Panels>
      </Tab.Group>

      <article
        dangerouslySetInnerHTML={{ __html: html }}
        className="mt-12 max-w-4xl border-t text-teal-100"
      />
    </section>
  )
}
