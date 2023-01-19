import React from 'react'
import { Link } from 'gatsby'
import { routes, translations } from '../../config'
import { CompanyShowcase1, CompanyShowcase2, CompanyShowcase3 } from '../../images'

type Props = {}

export default function HeroCompany({}: Props) {
  const link = translations.pt.phrases.home.goToCompany
  const text = translations.pt.phrases.home.visitCompanyDescription
  const header = translations.pt.phrases.home.visitCompanyHeader

  return (
    <section>
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative z-0 w-full bg-[url('https://images.unsplash.com/photo-1572971443669-3be9a4085180')] bg-center-half p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="absolute top-0 left-0 -z-10 h-full w-full bg-gradient-to-b from-black/20 via-black/30 to-black/40" />
            <div className="mx-auto flex h-full max-w-md flex-col items-center justify-center gap-y-3">
              <h2 className="text-center text-2xl font-bold tracking-tighter text-primary dark:text-secondary md:text-3xl">
                {header}
              </h2>
              <p className="block px-2 py-2 text-center tracking-tighter text-white">{text}</p>
              <div>
                <Link
                  to={routes.pt.company}
                  className="inline-block rounded bg-primary px-12 py-3 text-sm font-medium
                  text-white transition hover:opacity-80 dark:bg-secondary"
                >
                  {link}
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <img
              alt="Student"
              src={CompanyShowcase1}
              className="h-48 w-full object-cover sm:h-56 md:h-full"
            />

            <img
              alt="Student"
              src={CompanyShowcase2}
              className="h-48 w-full object-cover sm:h-56 md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
