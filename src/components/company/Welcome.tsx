import React from 'react'
import { LinkTranslate } from '../utils'
import { Building } from '../../images'
import { useI18next } from 'gatsby-plugin-react-i18next'

type Props = {}

export default function Welcome({}: Props) {
  const { t } = useI18next()
  const sectionId = t('sectionIdWelcome')

  const titleTop = t('titleTop')
  const titleBottom = t('titleBottom')
  const description = t('description')

  const takeMeToPresentation = t('takeMeToPresentation')
  const takeMeToProduction = t('takeMeToPresentation')

  const presentationId = t('sectionIdPresentation')
  const productionId = t('sectionIdProduction')

  return (
    <section id={sectionId} className="relative w-full bg-banner bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-transparent bg-gradient-to-r from-black/25 to-black/50 dark:from-black/50 dark:to-black/75" />
      <div className="relative mx-auto max-w-screen-xl px-4 py-64 text-white sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="mx-auto text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            <span>{titleTop}</span>
            <strong className="mx-auto block font-extrabold tracking-tighter text-secondary dark:bg-transparent dark:text-secondary">
              {titleBottom}
            </strong>
          </h1>

          <p className="mx-auto mt-4 sm:text-xl sm:leading-relaxed">{description}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-center">
            <LinkTranslate text={takeMeToPresentation} link={`#${presentationId}`} />
            <LinkTranslate text={takeMeToProduction} link={`#${productionId}`} alt />
          </div>
        </div>
      </div>
    </section>
  )
}
