import React from 'react'
import { LinkFill } from '../utils'
import { useI18next } from 'gatsby-plugin-react-i18next'

type Props = {}

export default function FeaturedConstruction({}: Props) {
  const { t } = useI18next()

  const title = t('constructionTitle')
  const text = t('constructionDescription')
  const takeMeThere = t('constructionTakeMeThere')
  const route = '/contrucao'

  return (
    <section className="w-full overflow-hidden bg-center bg-no-repeat bg-cover rounded bg-construction">
      <div className="p-8 bg-gradient-to-l from-black/75 via-black/50 to-black/25 md:p-12 lg:px-16 lg:py-24">
        <div className="flex flex-col items-center text-center sm:text-right md:items-end">
          <h2 className="mb-2 text-2xl font-bold text-white sm:text-3xl md:mb-1 md:text-5xl">
            {title}
          </h2>
          <p className="max-w-md text-sm font-normal leading-tight text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
            {text}
          </p>
          <div className="mt-4 sm:mt-8">
            <LinkFill link={route} text={takeMeThere} light />
          </div>
        </div>
      </div>
    </section>
  )
}
