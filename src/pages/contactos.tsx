import React from 'react'
import classNames from 'classnames'
import { useMediaQuery } from 'usehooks-ts'
import { Layout } from '../components/layout'
import { GoogleMapsLocation } from '../components/layout'
import { PhoneIcon, InboxArrowDownIcon, MapPinIcon } from '@heroicons/react/24/solid'

interface Contact {
  name: string
  text: string
  link: string | null
  icon: JSX.Element
}

const ContactsPagePT = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const width = isMobile ? 325 : 600
  const height = isMobile ? 225 : 450

  const contact: Contact[] = [
    {
      name: 'Location',
      text: 'R. Pereira Guerner 1649, Perosinho',
      link: 'https://goo.gl/maps/2ep68957S4uWJDu88',
      icon: <MapPinIcon className="h-6 w-6 text-primary dark:text-white" />,
    },
    {
      name: 'Email',
      text: 'contact@example.com',
      link: 'mailto:contact@example.com',
      icon: <InboxArrowDownIcon className="h-6 w-6 text-primary dark:text-white" />,
    },
    {
      name: 'Phone',
      text: '+351 91 000 00 00',
      link: null,
      icon: <PhoneIcon className="h-6 w-6 text-primary dark:text-white" />,
    },
  ]

  return (
    <Layout location="Contactos">
      <div
        className={classNames(
          isMobile ? 'flex flex-col items-center justify-center gap-y-6' : 'flex items-start justify-center gap-x-8'
        )}
      >
        <GoogleMapsLocation width={width} height={height} />
        <ul className="flex flex-col items-start justify-start gap-y-2 md:gap-y-4 font-normal">
          {contact.map((item, index) => (
            <li key={`contact-${index}`} className="flex items-center gap-x-3 text-sm md:text-lg">
              {item.icon}
              {item.link === null ? (
                <span>{item.text}</span>
              ) : (
                <a className="link" href={item.link}>
                  {item.text}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}
export default ContactsPagePT
