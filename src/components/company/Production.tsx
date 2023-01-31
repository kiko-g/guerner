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
    <section id={sectionId} className="">
      <div className="relative overflow-hidden bg-teal-800 bg-cover py-16 dark:bg-teal-900 lg:py-24">
        <div className="flex flex-col items-center justify-center gap-y-4 px-4 lg:gap-y-8 lg:px-3">
          <Tab.Group>
            <Tab.List className="mx-auto flex w-min items-center justify-center gap-x-1 rounded bg-white/10 px-1 py-1 font-lexend text-sm font-normal tracking-tighter lg:gap-x-1 lg:text-base">
              {tabList.map((tab: string, tabIdx: number) => (
                <Tab
                  key={`tab-${tabIdx}`}
                  className={({ selected }) =>
                    classNames(
                      selected ? 'bg-black/25 hover:bg-black/40' : 'hover:bg-teal-200/20',
                      'rounded px-1 py-0.5 text-white transition lg:px-2 lg:py-1'
                    )
                  }
                >
                  {tab}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2 lg:mt-10">
              {tabImages.map((tabImage: IGatsbyImageData, tabIdx: number) => {
                const gatsbyImage = getImage(tabImage)

                return (
                  <Tab.Panel key={`tab-panel-${tabIdx}`}>
                    <div className="flex flex-col items-center justify-center gap-y-4 text-center lg:gap-y-6">
                      <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                        {tabList[tabIdx]}
                      </h2>
                      {gatsbyImage ? (
                        <GatsbyImage
                          image={gatsbyImage}
                          alt={tabList[tabIdx]}
                          className="max-w-xl rounded-xl shadow"
                        />
                      ) : null}
                      <p className="mx-auto max-w-xl text-base text-teal-200 dark:text-teal-100 lg:text-lg">
                        {tabDescriptions[tabIdx]}
                      </p>
                    </div>
                  </Tab.Panel>
                )
              })}
            </Tab.Panels>
          </Tab.Group>

          <div className="mt-8">
            <LinkFill link={routeToProducts} text={takeMeToProducts} light />
          </div>
        </div>
      </div>

      <article
        dangerouslySetInnerHTML={{ __html: html }}
        className="article alt max-w-xs py-12 text-teal-100 dark:text-white lg:max-w-4xl"
      />
    </section>
  )
}
