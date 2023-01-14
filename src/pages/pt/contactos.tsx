import React from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { Layout } from '../../components/layout'
import { SendEmailForm, GoogleMapsLocation, ContactsBanner } from '../../components/contacts'

const ContactsPagePT = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <Layout location="Contactos">
      <main className="flex flex-col items-center justify-center gap-y-4 py-8 md:gap-y-6 md:py-16">
        <header className="w-full space-y-6">
          <h1 className="text-center text-4xl font-bold tracking-tight">Contactos</h1>
          <ContactsBanner />
        </header>

        <div className="w-full rounded">
          <GoogleMapsLocation height={isMobile ? 225 : 500} />
        </div>

        <SendEmailForm />
      </main>
    </Layout>
  )
}
export default ContactsPagePT
