import React from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { Layout, Seo } from '../components/layout'
import { SendEmailForm, GoogleMapsLocation, ContactsBanner } from '../components/contacts'
import { graphql } from 'gatsby'

export default function ContactsPage() {
  const { t, language } = useI18next()
  const isMobile = useMediaQuery('(max-width: 768px)')

  const title = t('title')
  const location = t('location')!
  const description = t('description')

  return (
    <Layout location={location}>
      <main className="flex flex-col items-center justify-center gap-y-4 py-8 lg:gap-y-6 lg:pb-40 lg:pt-16">
        <header className="w-full space-y-4">
          <h1 className="text-center text-4xl font-bold tracking-tight">{title}</h1>
          <p className="text-center font-normal lg:text-justify">{description}</p>
        </header>

        <div className="flex flex-col gap-4 lg:gap-8">
          <div className="flex flex-col gap-4 rounded bg-lighter px-4 py-4 shadow-xl dark:bg-white/5 lg:flex-row lg:gap-4">
            <GoogleMapsLocation height={isMobile ? 240 : 'auto'} />
            <ContactsBanner />
          </div>
          <SendEmailForm />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["contacts", "common"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
