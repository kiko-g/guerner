import React from 'react'
import { LinkFill } from '../utils'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { StaticImage } from 'gatsby-plugin-image'

type Props = {}

export default function FeaturedAgriculture({}: Props) {
  const { t } = useI18next()

  const route = 'agriculture'
  const header = t('agricultureHeader')
  const description = t('agricultureDescription')
  const takeMeThere = t('agricultureTakeMeThere')

  return (
    <section className="relative h-96 w-full overflow-hidden">
      <StaticImage
        src="../../images/agriculture.jpg"
        alt="Agriculture @ Guerner"
        placeholder="blurred"
        className="absolute left-0 top-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-r from-black/60 via-black/50 to-black/40 p-8 lg:p-12 lg:px-16 lg:py-24">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h2 className="mb-2 text-2xl font-bold text-white sm:text-3xl lg:mb-1 lg:text-5xl">{header}</h2>
          <p className="max-w-sm text-center text-sm font-normal leading-tight text-white/90 lg:mt-6 lg:block lg:text-left lg:text-lg lg:leading-relaxed">
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
