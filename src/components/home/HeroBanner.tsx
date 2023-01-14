import React from 'react'
import { Link } from 'gatsby'

type Props = {}

export default function HeroBanner({}: Props) {
  const title = `Guerner & Irmãos`
  const introduction = `Algum texto introdutório breve sobre a empresa.`

  return (
    <section className="relative w-full bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
      <div
        className="absolute inset-0 bg-transparent 
        bg-gradient-to-r from-white/30 to-white/10 text-gray-800 dark:from-black/60 dark:to-black/40 dark:text-white"
      />

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Bem vindo à
            <strong className="block font-extrabold tracking-tighter text-primary dark:text-secondary">{title}</strong>
          </h1>
          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">{introduction}</p>
          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              to="/produtos"
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow transition 
              hover:opacity-90 focus:outline-none focus:ring active:bg-primary dark:bg-secondary dark:active:bg-secondary sm:w-auto"
            >
              Ver Produtos
            </Link>

            <Link
              to="/contactos"
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
