import * as React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/layout'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'

const NotFoundPage = () => (
  <Layout location="Oops">
    <div className="mx-auto flex flex-col gap-y-4 text-center">
      <div>
        <h1 className="mb-4 font-headings text-4xl font-extrabold tracking-tight">Oops!</h1>
        <p>
          Hmmmm, esse <strong>caminho não existe</strong>. Parece que não há nada para ver aqui...
        </p>
        <p className="italic text-gray-400 dark:text-white/50">
          You hit a <strong>non-existing route in the website</strong> Looks like there is nothing to see here...
        </p>
      </div>

      <div className="mx-auto w-min whitespace-nowrap font-normal">
        <button
          className="group flex items-center gap-x-2 rounded bg-primary py-2 px-3 text-white 
          shadow transition hover:opacity-80"
        >
          <Link to="/" className="italic">
            Country roads... take me home
          </Link>
          <ArrowLongRightIcon className="h-5 w-5 transition" />
        </button>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
