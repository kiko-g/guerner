import React from 'react'
import { translations } from '../../config'
import { Layout } from '../../components/layout'
import { useLanguage } from '../../hooks/useLanguageContext'
import { useMediaQuery } from 'usehooks-ts'
import { SendEmailForm, GoogleMapsLocation, ContactsBanner } from '../../components/contacts'

const ContactsPage = () => {
  const { language } = useLanguage()
  const isMobile = useMediaQuery('(max-width: 768px)')

  const location = translations[language].location.contacts
  const title = translations[language].phrases.contacts.title

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
export default ContactsPage
