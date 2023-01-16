import { Link } from 'gatsby'
import React, { useState } from 'react'

type Props = {}

export default function SendEmailForm({}: Props) {
  const headerText = `Entre em contacto connosco`
  const bodyText = `Preencha o formulário ao lado para nos enviar um email com as suas informações.`
  const receiverEmail = process.env.GATSBY_GUERNER_EMAIL!

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [location, setLocation] = useState('')
  const [messageBody, setMessageBody] = useState('')
  const [consentTerms, setConsentTerms] = useState(false)

  return (
    <section className="rounded bg-light shadow dark:bg-white/5">
      <div className="rounded-t lg:grid lg:grid-cols-12 lg:rounded-none lg:rounded-l">
        {/* Desktop header */}
        <div className="relative flex h-32 items-end rounded-t bg-gray-900 lg:col-span-5 lg:h-full lg:rounded-none lg:rounded-l xl:col-span-6">
          <img
            alt="Night"
            src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full rounded-t object-cover opacity-80 lg:rounded-none lg:rounded-l"
          />
          <div className="hidden lg:relative lg:block lg:p-8">
            <Link
              to="/"
              className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-2 sm:h-20 sm:w-20"
            >
              <img
                src={'/images/avatar.png'}
                alt="Guerner"
                className="z-20 inline-flex h-full w-full rounded-full transition"
              />
            </Link>
            <h2 className="mt-6 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              {headerText}
            </h2>
            <p className="mt-4 leading-relaxed text-white/90">{bodyText}</p>
          </div>
        </div>

        <div className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            {/* Mobile header */}
            <div className="relative -mt-16 block lg:hidden">
              <Link
                to="/"
                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-2 sm:h-20 sm:w-20"
              >
                <img
                  src={'/images/avatar.png'}
                  alt="Guerner"
                  className="z-20 inline-flex h-full w-full rounded-full transition"
                />
              </Link>
              <h1 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">{headerText}</h1>
              <p className="mt-4 leading-relaxed">{bodyText}</p>
            </div>

            {/* Send email form */}
            <form action="#" className="mt-8 grid grid-cols-6 gap-x-4 gap-y-3">
              {/* Name */}
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="name" className="block text-sm">
                  Nome
                </label>

                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  className="mt-0.5"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Nome completo"
                />
              </div>

              {/* Location */}
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="location" className="block text-sm">
                  Localização
                </label>

                <input
                  type="text"
                  id="location"
                  name="location"
                  className="mt-0.5"
                  placeholder="Cidade, País"
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                />
              </div>

              {/* Email */}
              <div className="col-span-6">
                <label htmlFor="email" className="block text-sm">
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-0.5"
                  placeholder="example@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              {/* Phone */}
              <div className="col-span-6 sm:col-span-6">
                <label htmlFor="phone" className="block text-sm">
                  Telemóvel
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-0.5"
                  placeholder="+351 91 123 45 78"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
              </div>

              {/* Message */}
              <div className="col-span-6 sm:col-span-6">
                <label htmlFor="messageBody" className="block text-sm">
                  Mensagem
                </label>

                <textarea
                  id="messageBody"
                  name="messageBody"
                  rows={8}
                  className="mt-0.5"
                  value={messageBody}
                  onChange={e => setMessageBody(e.target.value)}
                />
              </div>

              {/* Checkbox */}
              <div className="col-span-6">
                <label htmlFor="acceptTerms" className="flex gap-2">
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    name="acceptTerms"
                    className="h-5 w-5"
                    checked={consentTerms}
                    onChange={e => setConsentTerms(e.target.checked)}
                  />

                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Li e aceito os{' '}
                    <Link to="/" className="link font-bold">
                      termos e condições
                    </Link>
                    .
                  </span>
                </label>
              </div>

              {/* Submit */}
              <div className="col-span-6 mt-3">
                <button
                  type="submit"
                  className="w-full rounded bg-primary px-12 py-3 text-sm text-white transition hover:opacity-80 dark:bg-secondary"
                >
                  Enviar email
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}