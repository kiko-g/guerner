import React from 'react'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { Banner } from '../images'
import { Layout } from '../components/layout'
import { LinkFill } from '../components/utils'

export default function NotFoundPage() {
  const { t } = useI18next()
  const location = t('location')!

  return (
    <Layout location={location}>
      <main className="mx-auto flex max-w-5xl flex-col gap-y-4 py-8 text-center">
        <img alt="Guerner" className="h-64 w-full rounded object-cover shadow-xl" src={Banner} />
        <div>
          <h1 className="mb-4 font-headings text-4xl font-extrabold tracking-tight">
            404 | Not Found
          </h1>
        </div>

        <div className="mx-auto w-min whitespace-nowrap font-normal italic">
          <LinkFill link="/" text="Country roads... take me home!" />
        </div>
      </main>
    </Layout>
  )
}
