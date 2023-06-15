import React from 'react'
import { LinkTranslate } from '../utils'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { Banner2 } from '../../images'

type Props = {}

export default function Welcome({}: Props) {
  const { t } = useI18next()
  const sectionId = t('sectionIdWelcome')

  const titleTop = t('titleTop')
  const titleBottom = t('titleBottom')
  const description = t('description')

  const takeMeToProduction = t('takeMeToProduction')
  const takeMeToPresentation = t('takeMeToPresentation')

  const presentationId = t('sectionIdPresentation')
  const productionId = t('sectionIdProduction')

  return (
    <section id={sectionId} className="relative w-full bg-transparent">
      <div className="blob fixed -bottom-36 -left-80 right-auto z-[-1] h-[75vh] w-[25%] animate-pulse-medium animate-sway rounded-full blur-[200px] transition-all dark:-bottom-36 dark:-right-80 dark:left-auto" />
      <div className="blob fixed -bottom-12 -right-80 left-auto z-[-1] h-[75vh] w-[25%] animate-pulse-medium animate-sway rounded-full blur-[200px] transition-all dark:-bottom-12 dark:-left-80 dark:right-auto" />

      <div className="relative mx-auto max-w-screen-xl px-4 py-64 text-white sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="mx-auto text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            <span>{titleTop}</span>
            <strong className="mx-auto block font-extrabold tracking-tighter text-secondary dark:bg-transparent dark:text-tertiary">
              {titleBottom}
            </strong>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">{description}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-center">
            <LinkTranslate text={takeMeToPresentation} link={`#${presentationId}`} />
            <LinkTranslate text={takeMeToProduction} link={`#${productionId}`} alt />
          </div>
        </div>
      </div>
    </section>
  )
}
