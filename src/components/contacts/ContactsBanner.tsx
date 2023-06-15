import React from 'react'
import { Building } from '../../images'
import { PhoneIcon, InboxArrowDownIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useI18next } from 'gatsby-plugin-react-i18next'
import CopyButton from './CopyButton'

type Props = {}

export default function ContactsBanner({}: Props) {
  const { t } = useI18next()
  const email = process.env.GATSBY_GUERNER_EMAIL_ADDRESS
  const phone = process.env.GATSBY_GUERNER_PHONE_NUMBER
  const address = process.env.GATSBY_GUERNER_STREET_ADDRESS

  const contacts = [
    {
      text: phone,
      link: null,
      icon: PhoneIcon,
    },
    {
      text: email,
      link: `mailto:${email}`,
      icon: InboxArrowDownIcon,
    },
    {
      text: address,
      link: 'https://goo.gl/maps/2ep68957S4uWJDu88',
      icon: MapPinIcon,
    },
  ]

  return (
    <div className="flex w-full flex-col items-center justify-center gap-x-4 gap-y-4">
      {/* Image */}
      <img
        src={Building}
        alt="Guerner Building"
        className="h-48 w-full rounded bg-primary object-cover object-center dark:bg-tertiary lg:h-96"
      />

      {/* Contacts */}
      <ul className="flex h-full w-full flex-col items-start justify-start gap-1 font-normal md:gap-2">
        {contacts.map((item, index) => (
          <li key={`contact-${index}`} className="flex w-full items-center gap-2 lg:gap-3">
            <item.icon className="h-5 w-5 text-teal-600 dark:text-tertiary md:h-6 md:w-6" />
            <ContactDescription link={item.link} text={item.text} />
            <CopyButton text={item.text} />
          </li>
        ))}
      </ul>
    </div>
  )
}

function ContactDescription({ link, text }: { link: string | null; text: string }) {
  return link === null ? (
    <span className="w-full text-sm leading-tight tracking-tight lg:text-base">{text}</span>
  ) : (
    <a
      href={link}
      className="w-full text-sm leading-tight tracking-tight transition hover:text-primary hover:underline dark:text-white dark:hover:text-tertiary lg:text-base"
    >
      {text}
    </a>
  )
}
