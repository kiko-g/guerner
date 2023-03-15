import React from 'react'
import { LinkFill } from '../utils'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { Construction } from '../../images'

type Props = {}

export default function FeaturedConstruction({}: Props) {
  const { t } = useI18next()
  const route = 'construction'
  const header = t('constructionHeader')
  const description = t('constructionDescription')
  const takeMeThere = t('constructionTakeMeThere')

  return (
    <section className="relative w-full">
      <img
        src={Construction}
        alt="Construction @ Guerner"
        className="absolute top-0 left-0 z-[-1] h-full w-full object-cover"
      />
      <div className="bg-gradient-to-l from-black/75 via-black/50 to-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="flex flex-col items-center text-center sm:text-right md:items-end">
          <h2 className="mb-2 text-2xl font-bold text-white sm:text-3xl md:mb-1 md:text-5xl">
            {header}
          </h2>
          <p className="max-w-sm text-sm font-normal leading-tight text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
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
