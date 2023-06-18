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
        className="absolute left-0 top-0 z-[-1] h-full w-full object-cover"
      />
      <div className="bg-gradient-to-l from-black/75 via-black/50 to-black/25 p-8 lg:p-12 lg:px-16 lg:py-24">
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
