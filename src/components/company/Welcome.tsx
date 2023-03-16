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
    <section id={sectionId} className="relative w-full bg-transparent dark:bg-slate-900/50">
      <div className="xd fixed -bottom-12 -left-32 z-[-1] h-[75vh] w-[25%] rotate-[150deg] animate-pulse-medium rounded-full blur-[200px] transition-all" />
      <div className="xd fixed -bottom-48 -right-16 z-[-1] h-[75vh] w-[25%] rotate-[30deg] animate-pulse-slow rounded-full blur-[200px] transition-all" />

      <div className="relative mx-auto max-w-screen-xl px-4 py-64 text-white sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="mx-auto text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            <span>{titleTop}</span>
            <strong className="mx-auto block font-extrabold tracking-tighter text-secondary dark:bg-transparent dark:text-secondary">
              {titleBottom}
            </strong>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">{description}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-center">
            <LinkTranslate text={takeMeToPresentation} link={`#${presentationId}`} />
            <LinkTranslate text={takeMeToProduction} link={`#${productionId}`} alt />
          </div>
        </div>
      </div>
    </section>
  )
}
