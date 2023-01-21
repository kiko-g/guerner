import React from 'react'
import { PhoneIcon, InboxArrowDownIcon, MapPinIcon } from '@heroicons/react/24/solid'

interface Contact {
  name: string
  text: string
  link: string | null
  icon: JSX.Element
}

type Props = {}

export default function ContactsBanner({}: Props) {
  const email = process.env.GATSBY_GUERNER_EMAIL_ADDRESS!

  const contact: Contact[] = [
    {
      name: 'Phone',
      text: '+351 91 000 00 00',
      link: null,
      icon: <PhoneIcon className="h-6 w-6 text-primary dark:text-secondary md:h-7 md:w-7" />,
    },
    {
      name: 'Email',
      text: email,
      link: `mailto:${email}`,
      icon: (
        <InboxArrowDownIcon className="h-6 w-6 text-primary dark:text-secondary md:h-7 md:w-7" />
      ),
    },
    {
      name: 'Location',
      text: 'R. Pereira Guerner 1649, Vila Nova de Gaia, Portugal',
      link: 'https://goo.gl/maps/2ep68957S4uWJDu88',
      icon: <MapPinIcon className="h-6 w-6 text-primary dark:text-secondary md:h-7 md:w-7" />,
    },
  ]

  return (
    <div
      className="flex w-full flex-col items-center justify-center gap-y-4 gap-x-4 rounded 
      bg-light px-4 py-4 shadow dark:bg-white/5 md:flex-row md:items-start md:justify-between md:gap-x-8 md:px-6 md:py-6"
    >
      <ul className="flex w-full max-w-md flex-col items-start justify-start gap-y-2 font-normal md:gap-y-3">
        {contact.map((item, index) => (
          <li key={`contact-${index}`} className="flex items-center gap-x-3">
            <span>{item.icon}</span>
            {item.link === null ? (
              <span>{item.text}</span>
            ) : (
              <a
                className="font-medium transition hover:text-primary/75 hover:underline 
                dark:text-white/75 dark:hover:text-secondary"
                href={item.link}
              >
                {item.text}
              </a>
            )}
          </li>
        ))}
      </ul>
      <img
        className="h-48 w-full rounded bg-primary object-cover object-center dark:bg-secondary lg:h-64"
        src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19"
      />
    </div>
  )
}
