import React, { useMemo, useState } from 'react'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { Link } from 'gatsby'
import { Contact } from '../../images'

type Props = {}

export default function SendEmailForm({}: Props) {
  const { t } = useI18next()

  const br = `%0D%0A`
  const receiverEmail = process.env.GATSBY_GUERNER_EMAIL_ADDRESS!

  const header = t('formHeader')
  const instructions = t('formText')
  const placeholders = {
    name: t('formPlaceholderName'),
    email: t('formPlaceholderEmail'),
    subject: t('formPlaceholderSubject'),
    phone: t('formPlaceholderPhone'),
    location: t('formPlaceholderLocation'),
    message: t('formPlaceholderMessage'),
    terms: t('formPlaceholderTerms'),
  }

  const routeHome = '/'
  const routeTerms = '/terms'

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [location, setLocation] = useState('')
  const [messageBody, setMessageBody] = useState('')
  const [consentTerms, setConsentTerms] = useState(false)

  const emailContent = useMemo(() => {
    return [
      `${t('name')}: ${name}`,
      `${t('phone')}: ${phone ? phone : 'N/A'}`,
      `${t('location-geo')}: ${location ? location : 'N/A'}`,
      `${t('message')}: ${encodeURIComponent(messageBody)}`,
      `${br}${br}${br}${t('sentFromWebsiteText')}: ${name}`,
    ].join(br)
  }, [name, phone, location, messageBody])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <section className="rounded bg-light shadow-xl dark:bg-white/5">
      <div className="rounded-t lg:grid lg:grid-cols-12 lg:rounded-none lg:rounded-l">
        {/* Desktop header */}
        <div className="relative flex items-end rounded-t lg:col-span-5 lg:h-full lg:rounded-none lg:rounded-l xl:col-span-6">
          <img
            alt="Night Banner"
            src={Contact}
            className="absolute inset-0 h-full w-full rounded-t object-cover object-center lg:rounded-none lg:rounded-l"
          />
          <div className="hidden lg:relative lg:block lg:p-8">
            <Link
              to={routeHome}
              className="inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-primary p-0.5 shadow-xl transition hover:opacity-90 sm:h-20 sm:w-20"
            >
              <img
                alt="Guerner"
                src="/images/icon.png"
                className="z-20 inline-flex h-full w-full rounded-full transition"
              />
            </Link>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">{header}</h2>
            <p className="mt-2 leading-relaxed text-white/90">{instructions}</p>
          </div>
        </div>

        <div className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            {/* Mobile header */}
            <div className="relative -mt-16 block lg:hidden">
              <Link
                to={routeHome}
                className="inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary
              bg-primary p-0.5 shadow-xl transition hover:opacity-90 sm:h-20 sm:w-20"
              >
                <img
                  src="/images/icon.png"
                  alt="Guerner"
                  className="z-20 inline-flex h-full w-full rounded-full transition"
                />
              </Link>
              <h1 className="mt-2 text-2xl font-bold sm:text-3xl lg:text-4xl">{header}</h1>
              <p className="mt-2 leading-relaxed">{instructions}</p>
            </div>

            {/* Send email form */}
            <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-x-4 gap-y-3">
              {/* Name */}
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="name" className="block text-sm">
                  {t('name')}
                </label>

                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  className="mt-0.5"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder={placeholders.name}
                />
              </div>

              {/* Location */}
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="location" className="block text-sm">
                  {t('location-geo')}
                </label>

                <input
                  type="text"
                  id="location"
                  name="location"
                  className="mt-0.5"
                  placeholder={placeholders.location}
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                />
              </div>

              {/* Subject */}
              <div className="col-span-6">
                <label htmlFor="subject" className="block text-sm">
                  {t('subject')}
                </label>

                <input
                  required
                  type="text"
                  id="subject"
                  name="subject"
                  className="mt-0.5"
                  placeholder={placeholders.subject}
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                />
              </div>

              {/* Phone */}
              <div className="col-span-6 sm:col-span-6">
                <label htmlFor="phone" className="block text-sm">
                  {t('phone')}
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-0.5"
                  placeholder={placeholders.phone}
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
              </div>

              {/* Message */}
              <div className="col-span-6 sm:col-span-6">
                <label htmlFor="messageBody" className="block text-sm">
                  {t('message')}
                </label>

                <textarea
                  required
                  rows={8}
                  id="messageBody"
                  name="messageBody"
                  className="mt-0.5"
                  value={messageBody}
                  onChange={e => setMessageBody(e.target.value)}
                />
              </div>

              {/* Checkbox */}
              <div className="col-span-6">
                <label htmlFor="acceptTerms" className="flex gap-2">
                  <input
                    required
                    type="checkbox"
                    id="acceptTerms"
                    name="acceptTerms"
                    className="h-5 w-5"
                    checked={consentTerms}
                    onChange={e => setConsentTerms(e.target.checked)}
                  />

                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    {placeholders.terms}{' '}
                    <Link
                      to={routeTerms}
                      className="font-bold transition hover:text-primary hover:underline dark:text-white/75 dark:hover:text-tertiary"
                    >
                      {t('termsAndConditionsText')}
                    </Link>
                    .
                  </span>
                </label>
              </div>

              {/* Submit */}
              <div className="col-span-6 mt-3">
                <a
                  href={`mailto:${receiverEmail}?subject=${subject}&body=${emailContent}`}
                  className="inline-flex w-full justify-center rounded bg-primary px-12 py-3 text-sm text-white transition hover:opacity-80 dark:bg-tertiary/75"
                >
                  {t('send')}
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
