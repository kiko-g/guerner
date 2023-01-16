import React from 'react'
import config from '../../config'
import { Link } from 'gatsby'

type Props = {}

export default function FeaturedAgriculture({}: Props) {
  const title = `Agricultura`
  const text = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officia corporis quasi doloribus iure
  architecto quae voluptatum beatae excepturi dolores.`

  return (
    <section className="w-full overflow-hidden rounded bg-[url(https://images.unsplash.com/photo-1672803949246-85b33371c7ab)] bg-cover bg-center bg-no-repeat">
      <div className="bg-gradient-to-r from-black/60 to-black/20 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="flex flex-col items-center text-center sm:text-left md:items-start">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">{title}</h2>
          <p
            className="max-w-md text-sm font-normal leading-tight text-white/90 
            md:mt-6 md:block md:text-lg md:leading-relaxed"
          >
            {text}
          </p>
          <div className="mt-4 sm:mt-8">
            <Link
              to={config.pt.routes.products.agriculture}
              className="inline-flex items-center rounded-full bg-primary px-8 py-3 text-white shadow-lg 
              transition hover:opacity-80 focus:outline-none focus:ring dark:bg-secondary"
            >
              <span className="text-sm font-medium">Ver produtos</span>

              <svg
                className="ml-3 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
