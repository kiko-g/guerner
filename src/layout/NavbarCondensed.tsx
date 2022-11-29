import React from 'react'
import { Link } from 'gatsby'
import { Disclosure } from '@headlessui/react'
import DarkModeSwitch from './DarkModeSwitch'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { HomeIcon, QuestionMarkCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline'

const navigation = [
  { title: 'Home', location: '/', icon: <HomeIcon className="mr-2 h-[1.2rem] w-[1.2rem]" /> },
  {
    title: 'FAQs',
    location: '/faqs',
    icon: <QuestionMarkCircleIcon className="mr-1.5 mt-0.5 h-[1.2rem] w-[1.2rem]" />,
  },
  {
    title: 'About',
    location: '/about',
    icon: <InformationCircleIcon className="mr-1.5 mt-0.5 h-[1.2rem] w-[1.2rem]" />,
  },
]

type Props = {
  location: string
}

const NavbarCondensed = ({ location }: Props) => {
  return (
    <Disclosure
      as="nav"
      className="absolute top-0 z-20 w-full space-x-4 bg-ice/75 px-3 py-2 text-gray-800 dark:bg-darker/75 dark:text-white md:w-[50vw] md:py-0 md:px-3"
    >
      {({ open }) => {
        return (
          <>
            <div className={`${open ? 'p-0' : 'p-2'} relative flex items-center justify-between md:py-0`}>
              <Hamburger open={open} />
              <Header location={location} />
            </div>
            <Mobile location={location} />
          </>
        )
      }}
    </Disclosure>
  )
}

const Hamburger = ({ open }: { open: boolean }) => (
  <div
    className={`z-50 md:hidden ${
      open
        ? 'absolute top-2 right-2 my-auto flex h-6 items-center justify-end space-x-2'
        : 'flex w-full items-center justify-between'
    }`}
  >
    <div className="flex w-full items-center justify-between space-x-1">
      <DarkModeSwitch />
      <Disclosure.Button className="group text-gray-800 transition duration-200 ease-in dark:text-white md:hidden">
        <span className="sr-only">Open nav menu</span>
        {open ? (
          <XMarkIcon
            className="ease block h-6 w-6 transition duration-200 group-hover:text-tertiary/75 dark:group-hover:text-secondary/75"
            aria-hidden="true"
          />
        ) : (
          <Bars3Icon
            className="ease block h-6 w-6 transition duration-200 group-hover:text-tertiary/75 dark:group-hover:text-secondary/75"
            aria-hidden="true"
          />
        )}
      </Disclosure.Button>
    </div>
  </div>
)

const Header = ({ location }: { location: string }) => (
  <div className="flex flex-1 items-center justify-between p-0 md:items-stretch md:justify-between lg:p-4">
    <div className="hidden space-x-8 self-center md:inline-flex">
      {navigation.map((link, index) => (
        <Link to={link.location} key={`nav-${index}`} className="relative py-1">
          <button
            type="button"
            className={`flex h-12 items-center justify-center font-medium lowercase tracking-wide transition ${
              location === link.title
                ? 'font-bold text-tertiary dark:text-white'
                : 'text-gray-400 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white'
            }`}
          >
            <span className="flex items-center justify-center">
              {link.icon}
              {link.title}
            </span>
          </button>
        </Link>
      ))}
    </div>

    <div className="hidden self-center md:inline-flex">
      <DarkModeSwitch />
    </div>
  </div>
)

const Mobile = ({ location }: { location: string }) => (
  <Disclosure.Panel className="flex flex-col space-y-3 py-2 md:hidden">
    {navigation.map((link, index) => (
      <Link to={link.location} className="relative h-auto" key={`mobile-nav-${index}`}>
        <button
          type="button"
          className={`flex h-auto items-center justify-center font-medium lowercase tracking-wide transition ${
            location === link.title
              ? 'text-tertiary dark:text-white'
              : 'text-gray-800/70 hover:text-gray-800 dark:text-white/60 dark:hover:text-white'
          }`}
        >
          <span className="flex items-center justify-center">
            {link.icon}
            {link.title}
          </span>
          {location === link.title ? (
            <span className="absolute -left-4 h-full w-1 rounded-sm bg-tertiary dark:bg-secondary" />
          ) : null}
        </button>
      </Link>
    ))}
  </Disclosure.Panel>
)

export default NavbarCondensed
