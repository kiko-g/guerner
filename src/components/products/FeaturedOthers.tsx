import React from 'react'
import { LinkFill } from '../utils'
import { useI18next } from 'gatsby-plugin-react-i18next'

type Props = {}

export default function FeaturedOthers({}: Props) {
  const { t } = useI18next()
  const route = 'others'
  const header = t('othersHeader')
  const description = t('othersDescription')
  const takeMeThere = t('othersTakeMeThere')

  return (
    <section className="relative w-full">
      <div className="absolute left-0 top-0 z-[-1] h-full w-full" />
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 dark:from-slate-600 dark:to-slate-700 lg:p-12 lg:px-16 lg:py-24">
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