import React from 'react'
import { LinkFill } from '../utils'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { StaticImage } from 'gatsby-plugin-image'

type Props = {}

export default function FeaturedOthers({}: Props) {
  const { t } = useI18next()
  const route = 'others'
  const header = t('othersHeader')
  const description = t('othersDescription')
  const takeMeThere = t('othersTakeMeThere')

  return (
    <section className="relative h-96 w-full overflow-hidden">
      <StaticImage
        src="../../images/banner-b.webp"
        alt="Other Products from Guerner"
        placeholder="blurred"
        className="absolute left-0 top-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-l from-black/40 via-black/60 to-black/40 p-8 lg:p-12 lg:px-16 lg:py-24">
        <div className="flex flex-col items-center text-center sm:text-center lg:items-center">
          <h2 className="mb-2 text-2xl font-bold text-white sm:text-3xl lg:mb-1 lg:text-5xl">
            {header}
          </h2>
          <p className="max-w-sm text-center text-sm font-normal leading-tight text-white/90 lg:mt-6 lg:block lg:text-center lg:text-lg lg:leading-relaxed">
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
