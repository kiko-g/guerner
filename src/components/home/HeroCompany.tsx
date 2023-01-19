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
          <div className="w-full bg-[url('https://images.unsplash.com/photo-1572971443669-3be9a4085180')] z-0 relative bg-center-half p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="absolute top-0 left-0 bg-gradient-to-b from-black/20 via-black/35 to-black/50 w-full h-full -z-10" />
            <div className="mx-auto flex h-full max-w-md gap-y-3 flex-col items-center justify-center">
              <h2 className="text-center tracking-tighter text-2xl font-bold text-primary dark:text-secondary md:text-3xl">
                {header}
              </h2>
              <p className="block text-center tracking-tighter text-white px-2 py-2">{text}</p>
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
