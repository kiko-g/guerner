import React from 'react'
import { useLanguage } from '../../hooks/useLanguageContext'
import { translations } from '../../config'
import { Building } from '../../images'

type Props = {}

export default function Presentation({}: Props) {
  const { language } = useLanguage()
  const sectionId = translations[language].phrases.company.sectionIds.presentation

  return (
    <section id={sectionId} className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
      <div className="relative flex items-center justify-center bg-cta bg-cover px-8 dark:bg-cta-dark md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-xl flex-col items-start justify-center text-center sm:text-left">
          <h2 className="text-2xl font-bold md:text-3xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </h2>
          <p className="hidden md:mt-4 md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
            sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet
            volutpat quisque ut interdum tincidunt duis.
          </p>
        </div>
        <div className="absolute bottom-0 z-50 h-2 w-full bg-gradient-to-r from-primary to-secondary" />
      </div>

      <img alt="Building" src={Building} className="h-56 w-full object-cover sm:h-full" />
    </section>
  )
}
