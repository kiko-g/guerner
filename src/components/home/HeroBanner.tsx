import React from 'react'
import config from '../../config'
import { Link } from 'gatsby'

type Props = {}

export default function HeroBanner({}: Props) {
  const title = `Guerner & Irmãos`
  const introduction = `Algum texto introdutório breve sobre a empresa.`

  return (
    <section className="relative w-full bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
      <div
        className="absolute inset-0 bg-transparent 
        bg-gradient-to-r from-black/25 to-black/50 dark:from-black/50 dark:to-black/75"
      />

      <div
        className="relative mx-auto max-w-screen-xl px-4 py-64 text-white sm:px-6 lg:flex 
        lg:h-screen lg:items-center lg:px-8"
      >
        <div className="mx-auto text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Bem vindo à
            <strong className="block font-extrabold tracking-tighter text-tertiary dark:text-secondary">
              {title}
            </strong>
          </h1>
          <p className="mx-auto mt-4 sm:text-xl sm:leading-relaxed">{introduction}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-center">
            <Link
              to={config.pt.routes.products.main}
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow transition 
              hover:opacity-90 focus:outline-none focus:ring active:bg-primary dark:bg-secondary dark:active:bg-secondary sm:w-auto"
            >
              Ver Produtos
            </Link>

            <Link
              to={config.pt.routes.contacts}
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-primary shadow transition 
              hover:opacity-90 focus:outline-none focus:ring active:text-primary dark:text-secondary dark:active:text-secondary sm:w-auto"
            >
              Contacte-nos
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
