import React from 'react'
import { LinkFill } from '../utils'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { StaticImage } from 'gatsby-plugin-image'

type Props = {}

export default function FeaturedConstruction({}: Props) {
  const { t } = useI18next()
  const route = 'construction'
  const header = t('constructionHeader')
  const description = t('constructionDescription')
  const takeMeThere = t('constructionTakeMeThere')

  return (
    <section className="relative w-full h-96 overflow-hidden">
      <StaticImage
        src="../../images/construction.jpg"
        alt="Construction @ Guerner"
        placeholder="blurred"
        className="absolute left-0 top-0 z-0 h-full w-full object-cover"
      />
      <div className="bg-gradient-to-l absolute w-full h-full top-0 left-0 from-black/60 via-black/50 to-black/40 p-8 lg:p-12 lg:px-16 lg:py-24 z-10">
        <div className="flex flex-col items-center text-center sm:text-right lg:items-end">
          <h2 className="mb-2 text-2xl font-bold text-white sm:text-3xl lg:mb-1 lg:text-5xl">
            {header}
          </h2>
          <p className="max-w-sm text-center text-sm font-normal leading-tight text-white/90 lg:mt-6 lg:block lg:text-right lg:text-lg lg:leading-relaxed">
            {description}
          </p>
          <div className="mt-4 sm:mt-8">
            <LinkFill link={route} text={takeMeThere} light />
          </div>
        </div>
      </div>
    </section>
  )
}
