import React from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { Layout } from '../components/layout'
import { SendEmailForm, GoogleMapsLocation, ContactsBanner } from '../components/contacts'
import { graphql } from 'gatsby'

export default function ContactsPage() {
  const { t } = useI18next()
  const isMobile = useMediaQuery('(max-width: 768px)')

  const title = t('title')
  const location = t('location')!

  return (
    <Layout location={location}>
      <main className="flex flex-col items-center justify-center gap-y-4 py-8 md:gap-y-6 md:py-16">
        <header className="w-full">
          <h1 className="text-center text-4xl font-bold tracking-tight">{title}</h1>
        </header>
        <ContactsBanner />
        <GoogleMapsLocation height={isMobile ? 225 : 500} />
        <SendEmailForm />
      </main>
    </Layout>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["contactos"] }, language: { eq: $language } }) {
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
