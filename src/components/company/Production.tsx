import React from 'react'
import { routes, translations } from '../../config'
import { useLanguage } from '../../hooks/useLanguageContext'
import { graphql, useStaticQuery } from 'gatsby'
import { Tab } from '@headlessui/react'
import { IGatsbyImageData, getImage, GatsbyImage } from 'gatsby-plugin-image'
import classNames from 'classnames'
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
  const { language } = useLanguage()
  const sectionId = translations[language].phrases.company.sectionIds.production
  const routeToProducts = routes[language].products.main
  const takeMeToProducts = translations[language].phrases.home.visitProducts.takeMeThere

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
      <div className="relative overflow-hidden bg-teal-800 bg-cover pt-20 pb-28 dark:bg-teal-900 sm:py-32">
        <div className="flex flex-col gap-y-8 items-center justify-center">
          <Tab.Group>
            <Tab.List
              className="mx-auto flex w-min items-center justify-center 
            gap-x-6 rounded bg-white/5 px-4 py-2 font-lexend"
            >
              {tabList.map((tab: string, tabIdx: number) => (
                <Tab
                  key={`tab-${tabIdx}`}
                  className={({ selected }) =>
                    classNames(
                      selected ? 'bg-black/25 hover:bg-black/40' : 'hover:bg-teal-200/20',
                      'rounded px-2 py-1 text-white transition'
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
                      {gatsbyImage ? (
                        <GatsbyImage
                          image={gatsbyImage}
                          alt={tabList[tabIdx]}
                          className="max-w-xl rounded-xl shadow"
                        />
                      ) : null}
                      <p className="mx-auto max-w-xl text-lg text-teal-200 dark:text-teal-100">
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
        className="alt max-w-4xl py-12 text-teal-100 dark:text-white"
      />
    </section>
  )
}
