import React from 'react'
import classNames from 'classnames'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { graphql, useStaticQuery } from 'gatsby'
import { Tab } from '@headlessui/react'
import { IGatsbyImageData, getImage, GatsbyImage } from 'gatsby-plugin-image'
import { LinkFill } from '../utils'

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
  const { t, language } = useI18next()
  const routeToProducts = '/products'
  const sectionId = t('sectionIdProduction')
  const takeMeToProducts = t('takeMeToProducts')

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
    <section id={sectionId}>
      <div className="relative overflow-hidden bg-primary/50 bg-cover pt-16 pb-16 dark:bg-gray-900/50 lg:pt-24 lg:pb-40">
        <div className="flex flex-col items-start justify-center gap-8 px-4 lg:flex-row lg:gap-y-8 lg:px-3">
          <Tab.Group>
            <Tab.List className="mx-auto flex flex-row items-start justify-start gap-2 self-stretch rounded bg-black/20 px-2 py-2 text-xs font-normal tracking-tighter dark:bg-white/5 md:mx-0 md:text-sm lg:flex-col lg:gap-3 lg:px-4 lg:py-4 lg:text-base">
              {tabList.map((tab: string, tabIdx: number) => (
                <Tab
                  key={`tab-${tabIdx}`}
                  className={({ selected }) =>
                    classNames(
                      selected
                        ? 'bg-secondary/50 hover:opacity-80 dark:bg-tertiary/50'
                        : 'hover:bg-secondary/20 dark:hover:bg-tertiary/20',
                      'w-full rounded px-2 py-1 text-white transition lg:px-4 lg:py-2'
                    )
                  }
                >
                  {tab}
                </Tab>
              ))}
              {/* <div className="mt-4 hidden h-px w-full bg-white dark:bg-tertiary lg:flex"></div> */}
            </Tab.List>

            <article className="flex flex-col">
              <Tab.Panels>
                {tabImages.map((tabImage: IGatsbyImageData, tabIdx: number) => {
                  const gatsbyImage = getImage(tabImage)

                  return (
                    <Tab.Panel key={`tab-panel-${tabIdx}`}>
                      <div className="flex flex-col items-center justify-center gap-y-4 text-center lg:gap-y-6">
                        {gatsbyImage ? (
                          <GatsbyImage
                            image={gatsbyImage}
                            alt={tabList[tabIdx]}
                            className="max-w-xl rounded-xl shadow"
                          />
                        ) : null}
                        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                          {tabList[tabIdx]}
                        </h2>
                        <p className="mx-auto max-w-xl text-base font-light text-white dark:text-white lg:text-base">
                          {tabDescriptions[tabIdx]}
                        </p>
                      </div>
                    </Tab.Panel>
                  )
                })}
              </Tab.Panels>
              <div className="mx-auto mt-8">
                <LinkFill link={routeToProducts} text={takeMeToProducts} light />
              </div>
            </article>
          </Tab.Group>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center bg-primary/50 backdrop-blur dark:bg-gray-900/50">
        <div className="my-16 rounded bg-teal-700 p-8 shadow-xl dark:bg-primary">
          <article
            dangerouslySetInnerHTML={{ __html: html }}
            className="article alt px-4 py-4 text-white dark:text-white lg:max-w-3xl lg:px-4 lg:py-8"
          />
        </div>
      </div>
    </section>
  )
}
