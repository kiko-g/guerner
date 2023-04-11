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
    <section id={sectionId} className="bg-primary/50 pt-6 dark:bg-navy/50 md:pt-12">
      {/* Production Centers */}
      <div className="relative overflow-hidden bg-cover pt-16 pb-16 lg:pt-24 lg:pb-40">
        <div className="flex w-full flex-col items-start justify-center gap-4 px-4 lg:flex-row lg:gap-4 lg:px-3">
          <Tab.Group>
            <Tab.List className="order-1 mx-auto flex flex-row items-start justify-start gap-2 self-stretch rounded bg-black/20 px-2 py-2 text-xs font-normal tracking-tighter dark:bg-black/20 md:order-2 md:mx-0 md:text-sm lg:flex-col lg:gap-3 lg:px-4 lg:py-4 lg:text-base">
              {tabList.map((tab: string, tabIdx: number) => (
                <Tab
                  key={`tab-${tabIdx}`}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded border px-2 py-1 transition lg:border-2 lg:px-4 lg:py-2',
                      selected
                        ? 'border-secondary bg-secondary/50 dark:border-tertiary dark:bg-tertiary/40'
                        : 'border-transparent hover:bg-secondary/60 dark:hover:bg-tertiary/60'
                    )
                  }
                >
                  <span className="tracking-tight text-white md:tracking-normal">{tab}</span>
                </Tab>
              ))}
            </Tab.List>

            <article className="order-2 flex flex-col rounded bg-black/20 px-4 py-4 md:order-1 md:px-6 md:py-6">
              <Tab.Panels>
                {tabImages.map((tabImage: IGatsbyImageData, tabIdx: number) => {
                  const gatsbyImage = getImage(tabImage)

                  return (
                    <Tab.Panel key={`tab-panel-${tabIdx}`}>
                      <div className="flex flex-col items-center justify-center text-center">
                        {gatsbyImage ? (
                          <GatsbyImage
                            image={gatsbyImage}
                            alt={tabList[tabIdx]}
                            className="max-h-96 rounded-xl shadow"
                          />
                        ) : null}
                        <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                          {tabList[tabIdx]}
                        </h2>
                        <p className="mx-auto mt-2 max-w-2xl text-base font-light text-white dark:text-white lg:text-base">
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

      {/* Production Description */}
      <div className="relative flex flex-col items-center justify-center bg-teal-600 backdrop-blur dark:bg-gray-800">
        <div className="my-32 mx-4 overflow-hidden rounded-3xl bg-slate-200 px-14 py-16 dark:bg-slate-600 xl:mx-0 xl:px-16">
          <article
            dangerouslySetInnerHTML={{ __html: html }}
            className="article alt lg:max-w-4xl"
          />
        </div>
      </div>
    </section>
  )
}
