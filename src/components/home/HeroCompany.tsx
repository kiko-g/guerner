import React, { useState } from 'react'
import { Link } from 'gatsby'
import { routes, translations } from '../../config'
import { CompanyShowcase1, CompanyShowcase2, CompanyShowcase3 } from '../../images'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'
import LinkFill from '../utils/LinkFill'

type Props = {}

export default function HeroCompany({}: Props) {
  const link = translations.pt.phrases.home.visitCompany.takeMeThere
  const text = translations.pt.phrases.home.visitCompany.description
  const header = translations.pt.phrases.home.visitCompany.header
  const [isShowing, setIsShowing] = useState(false)

  return (
    <section>
      <div className="w-full">
        <div className="grid grid-cols-1 2xl:grid-cols-2">
          {/* CTA */}
          <div className="bg-cta relative z-0 w-full bg-cover bg-no-repeat p-12 lg:px-16 lg:py-24">
            <div className="absolute top-0 left-0 -z-10 h-full w-full bg-gradient-to-b from-black/20 via-black/30 to-black/40" />
            <div className="mx-auto flex h-full max-w-md flex-col items-center justify-center gap-y-3">
              <h2 className="w-full text-center font-headings text-2xl font-bold tracking-tighter text-secondary dark:text-secondary xl:text-3xl">
                {header}
              </h2>
              <p className="block px-2 py-2 text-center tracking-tighter text-white">{text}</p>
              <LinkFill text={link} link={routes.pt.company} />
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2">
            <div className="relative">
              <img
                alt="Student"
                src={CompanyShowcase1}
                className="h-full w-full object-cover xl:h-[32rem]"
              />
            </div>

            <div className="relative">
              <img
                alt="Student"
                src={CompanyShowcase2}
                className="h-full w-full object-cover xl:h-[32rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
