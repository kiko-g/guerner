import React from 'react'
import { Link } from 'gatsby'
import { Disclosure } from '@headlessui/react'
import DarkModeSwitch from './DarkModeSwitch'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { HomeIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline'

const navigation = [
  { title: 'Home', location: '/', icon: <HomeIcon className="mr-1.5 mt-0.5 h-[1.2rem] w-[1.2rem]" /> },
  { title: 'Oops', location: '/404', icon: <ExclamationCircleIcon className="mr-1.5 mt-0.5 h-[1.2rem] w-[1.2rem]" /> },
]

type Props = {
  location: string
}

const NavbarCondensed = ({ location }: Props) => {
  return (
    <Disclosure as="nav" className="navbar">
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
    <Link to="/">
      {open ? (
        <img className="avatar top-0.5 h-5 w-5" src={'/images/avatar.png'} alt="Francisco Gonçalves" />
      ) : (
        <img className="avatar h-6 w-6" src={'/images/avatar.png'} alt="Francisco Gonçalves" />
      )}
    </Link>

    <div className="flex items-center space-x-1">
      <DarkModeSwitch />
      <Disclosure.Button className="hamburger group">
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
  <div className="header px-4 py-4">
    <div className="hidden space-x-8 self-center md:inline-flex">
      {navigation.map((link, index) => (
        <Link to={link.location} key={`nav-${index}`} className="relative py-1">
          <button
            type="button"
            className={`flex h-12 items-center justify-center font-medium lowercase tracking-wide transition ${
              location === link.title
                ? 'text-tertiary dark:text-white'
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
