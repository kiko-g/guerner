import React from 'react'
import { Layout } from '../../components/layout'
import translations from '../../../static/translations.json'

type Props = {}

export default function Terms({}: Props) {
  const title = translations.pt.phrases.footer['Terms and Conditions']

  return (
    <Layout location="Terms">
      <main className="flex flex-col items-center justify-center gap-y-4 py-8 md:gap-y-6 md:py-16">
        <header className="w-full space-y-6">
          <h1 className="text-center text-4xl font-bold tracking-tight">{title}</h1>
        </header>
      </main>
    </Layout>
  )
}
