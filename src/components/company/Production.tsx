import React from 'react'
import classNames from 'classnames'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { graphql, useStaticQuery } from 'gatsby'
import { Tab } from '@headlessui/react'
import { IGatsbyImageData, getImage, GatsbyImage } from 'gatsby-plugin-image'
import { LinkFill } from '../utils'

type Frontmatter = {
  lang: string
  title: string
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
            title
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
  const title = node!.frontmatter.title
  const tabList = node!.frontmatter.facilitiesNames
  const tabImages = node!.frontmatter.facilitiesImages
  const tabDescriptions = node!.frontmatter.facilitiesDescriptions

  return (
    <section id={sectionId} className="py-6 lg:py-12">
      {/* Production Centers */}
      <div className="relative mx-auto flex max-w-5xl flex-col items-center rounded-3xl bg-transparent px-4 py-4 lg:bg-black/20 lg:px-16 lg:py-16">
        <h3 className="mb-6 text-center text-3xl font-bold tracking-tighter text-white lg:text-4xl">
          {title}
        </h3>
        <div className="flex w-full flex-col items-start justify-center gap-6 lg:flex-row">
          <Tab.Group>
            <Tab.List className="order-1 mx-auto flex flex-row items-start justify-start gap-2 self-stretch rounded text-xs font-normal tracking-tighter lg:order-2 lg:mx-0 lg:flex-col lg:gap-3 lg:text-sm lg:text-sm">
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
                  <span className="tracking-tight text-white lg:tracking-normal">{tab}</span>
                </Tab>
              ))}
            </Tab.List>

            <article className="order-2 flex flex-col rounded lg:order-1">
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
      <div className="relative flex flex-col items-center justify-center backdrop-blur">
        <div className="mx-4 my-32 overflow-hidden rounded-3xl bg-slate-200 px-8 py-8 dark:bg-black/20 lg:mx-0 lg:px-16 lg:py-16">
          <article
            dangerouslySetInnerHTML={{ __html: html }}
            className="article alt lg:max-w-4xl"
          />
        </div>
      </div>
    </section>
  )
}
