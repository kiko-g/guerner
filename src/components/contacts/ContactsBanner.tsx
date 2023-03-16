import React from 'react'
import { Building } from '../../images'
import { PhoneIcon, InboxArrowDownIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useI18next } from 'gatsby-plugin-react-i18next'
import CopyButton from './CopyButton'

interface Contact {
  text: string
  link: string | null
  icon: JSX.Element
}

type Props = {}

export default function ContactsBanner({}: Props) {
  const { t } = useI18next()

  const email = process.env.GATSBY_GUERNER_EMAIL_ADDRESS!
  const phone = process.env.GATSBY_GUERNER_PHONE_NUMBER!
  const address = process.env.GATSBY_GUERNER_STREET_ADDRESS!

  const contact: Contact[] = [
    {
      text: phone,
      link: null,
      icon: <PhoneIcon className="h-6 w-6 text-teal-600 dark:text-secondary md:h-7 md:w-7" />,
    },
    {
      text: email,
      link: `mailto:${email}`,
      icon: (
        <InboxArrowDownIcon className="h-6 w-6 text-teal-600 dark:text-secondary md:h-7 md:w-7" />
      ),
    },
    {
      text: address,
      link: 'https://goo.gl/maps/2ep68957S4uWJDu88',
      icon: <MapPinIcon className="h-6 w-6 text-teal-600 dark:text-secondary md:h-7 md:w-7" />,
    },
  ]

  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-4 gap-x-4 rounded bg-light px-4 py-4 shadow dark:bg-gray-800/40 xl:flex-row xl:items-start xl:justify-between xl:gap-x-6 xl:px-6 xl:py-6">
      {/* Contacts */}
      <ul
        className="order-2 flex h-full w-full max-w-md flex-col items-start 
        justify-start gap-y-2 font-normal md:gap-y-3 xl:order-1"
      >
        {contact.map((item, index) => (
          <li key={`contact-${index}`} className="flex w-full items-center gap-x-3">
            <span>{item.icon}</span>
            {item.link === null ? (
              <span className="w-full">{item.text}</span>
            ) : (
              <a
                href={item.link}
                className="w-full font-medium transition hover:text-teal-500 hover:underline dark:text-white/75 dark:hover:text-secondary/75"
              >
                {item.text}
              </a>
            )}
            <CopyButton text={item.text} />
          </li>
        ))}
      </ul>

      {/* Image */}
      <img
        src={Building}
        alt="Guerner Building"
        className="order-1 h-48 w-full rounded bg-primary object-cover object-center 
        dark:bg-secondary/75 lg:h-64 xl:order-2"
      />
    </div>
  )
}
