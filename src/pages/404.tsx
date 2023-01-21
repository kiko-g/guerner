import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/layout'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import { Banner } from '../images'

const NotFoundPage = () => (
  <Layout location="Oops">
    <main className="mx-auto flex max-w-5xl flex-col gap-y-4 py-8 text-center">
      <img alt="Guerner" className="h-64 w-full rounded object-cover" src={Banner} />
      <div>
        <h1 className="mb-4 font-headings text-4xl font-extrabold tracking-tight">Oops!</h1>
        <p>
          Hmmmm, esse <strong>caminho não existe</strong>. Parece que não há nada para ver aqui...
        </p>
        <p className="italic text-gray-500 dark:text-white/50">
          We can't find that page. Looks like <strong>there is nothing to see here</strong>...
        </p>
      </div>

      <div className="mx-auto w-min whitespace-nowrap font-normal">
        <button className="group flex items-center gap-x-2 rounded bg-primary px-3 py-2 text-white shadow transition hover:opacity-80">
          <Link to="/" className="italic">
            Country roads... take me home
          </Link>
          <ArrowLongRightIcon className="h-5 w-5 transition" />
        </button>
      </div>
    </main>
  </Layout>
)

export default NotFoundPage
