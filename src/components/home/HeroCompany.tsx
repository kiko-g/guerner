import React from 'react'
import { routes } from '../../config'
import { Link } from 'gatsby'
import { CompanyShowcase1, CompanyShowcase2, CompanyShowcase3 } from '../../images'

type Props = {}

export default function HeroCompany({}: Props) {
  const header = `Lorem, ipsum dolor sit amet consectetur adipisicing elit`
  const link = `Conhece-nos melhor`
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
  scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum
  tincidunt duis.`

  return (
    <section>
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="w-full bg-center-half bg-[url('https://images.unsplash.com/photo-1572971443669-3be9a4085180')] p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto flex h-full max-w-md flex-col items-center justify-center">
              <h2 className="text-center text-2xl font-bold text-primary dark:text-secondary md:text-3xl">
                {header}
              </h2>
              <p className="hidden text-center text-white sm:mt-4 sm:block">{text}</p>
              <div className="mt-4 md:mt-8">
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

          <div className="-cols-2 grid md:grid-cols-1 lg:grid-cols-2">
            <img
              alt="Student"
              src={CompanyShowcase1}
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />

            <img
              alt="Student"
              src={CompanyShowcase2}
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
