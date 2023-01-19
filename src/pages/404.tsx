import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/layout'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'

const NotFoundPage = () => (
  <Layout location="Oops">
    <main className="flex flex-col max-w-5xl py-8 mx-auto text-center gap-y-4">
      <img
        alt=""
        className="object-cover w-full h-64 rounded"
        src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
      />
      <div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight font-headings">Oops!</h1>
        <p>
          Hmmmm, esse <strong>caminho não existe</strong>. Parece que não há nada para ver aqui...
        </p>
        <p className="italic text-gray-500 dark:text-white/50">
          We can't find that page. Looks like <strong>there is nothing to see here</strong>...
        </p>
      </div>

      <div className="mx-auto font-normal w-min whitespace-nowrap">
        <button className="flex items-center px-3 py-2 text-white transition rounded shadow group gap-x-2 bg-primary hover:opacity-80">
          <Link to="/" className="italic">
            Country roads... take me home
          </Link>
          <ArrowLongRightIcon className="w-5 h-5 transition" />
        </button>
      </div>
    </main>
  </Layout>
)

export default NotFoundPage
