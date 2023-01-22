import React from 'react'
import { Layout } from '../components/layout'
import { Banner } from '../images'
import { useLanguage } from '../hooks/useLanguageContext'
import { LinkFill } from '../components/utils'

export default function NotFoundPage() {
  const { language } = useLanguage()
  const link = `/${language}`

  return language === 'pt' ? (
    <Layout location="Erro">
      <main className="mx-auto flex max-w-5xl flex-col gap-y-4 py-8 text-center">
        <img alt="Guerner" className="h-64 w-full rounded object-cover shadow-xl" src={Banner} />
        <div>
          <h1 className="mb-4 font-headings text-4xl font-extrabold tracking-tight">Oops!</h1>
          <p className="text-gray-600 dark:text-gray-200">
            Hmmmm, esse <strong>caminho não existe</strong>. Parece que não há nada para ver aqui...
          </p>
        </div>

        <div className="mx-auto w-min whitespace-nowrap font-normal italic">
          <LinkFill link={link} text="Country roads... take me home!" />
        </div>
      </main>
    </Layout>
  ) : (
    <Layout location="Oops">
      <main className="mx-auto flex max-w-5xl flex-col gap-y-4 py-8 text-center">
        <img alt="Guerner" className="h-64 w-full rounded object-cover" src={Banner} />
        <div>
          <h1 className="mb-4 font-headings text-4xl font-extrabold tracking-tight">Oops!</h1>
          <p>
            We can't find that page. Looks like <strong>there is nothing to see here</strong>...
          </p>
        </div>

        <div className="mx-auto w-min whitespace-nowrap font-normal">
          <LinkFill link={link} text="Country roads... take me home!" />
        </div>
      </main>
    </Layout>
  )
}
