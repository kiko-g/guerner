import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { Disclosure } from '@headlessui/react'
import DarkModeSwitch from './DarkModeSwitch'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  HomeIcon,
  QuestionMarkCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline'
import classNames from 'classnames'

const navigation = [
  { title: 'Home', location: '/', icon: <HomeIcon className="h-5 w-5" /> },
  { title: 'FAQs', location: '/faqs', icon: <QuestionMarkCircleIcon className="h-5 w-5" /> },
  { title: 'About', location: '/about', icon: <InformationCircleIcon className="h-5 w-5" /> },
]

type Props = {
  title: string
  location: string
  special?: boolean
}

const Navbar = ({ title, location, special }: Props) => {
  return (
    <Disclosure
      as="nav"
      className={classNames(
        'sticky top-0 px-3 z-20 w-full space-x-4 py-2 md:py-0',
        'text-white dark:bg-darker dark:text-white',
        special ? 'bg-primary' : 'bg-darker'
      )}
    >
      {({ open }) => {
        return (
          <>
            <div
              className={classNames(
                'relative flex w-full items-center justify-between md:py-0',
                open ? 'p-0' : 'p-2'
              )}
            >
              <Hamburger open={open} />
              <Header title={title} location={location} />
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
    className={classNames(
      'z-50 md:hidden',
      open
        ? 'absolute top-2 right-2 my-auto flex h-6 items-center justify-end space-x-2'
        : 'flex w-full items-center justify-between'
    )}
  >
    <Link to="/">
      <img
        className={classNames('avatar', open ? 'top-0.5 h-5 w-5' : 'h-6 w-6')}
        src={'/images/avatar.png'}
        alt="Guerner"
      />
    </Link>

    <div className="flex items-center space-x-1">
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

const Header = ({ title, location }: Props) => (
  <div className="flex w-full items-center justify-between md:items-stretch md:justify-between">
    <div className="relative hidden h-auto space-x-12 self-center duration-200 hover:opacity-75 md:inline-flex">
      <Link to="/" className="flex items-center space-x-2">
        <img
          src={'/images/avatar.png'}
          alt="Guerner"
          className="z-20 inline-flex h-6 w-6 rounded-full transition"
        />
        <h2 className="text-xs font-bold tracking-tighter duration-150 lg:text-base">{title}</h2>
      </Link>
    </div>

    <div className="hidden gap-x-8 self-center md:inline-flex">
      {navigation.map((link, index) => (
        <Link to={link.location} key={`nav-${index}`} className="relative py-1">
          <button
            type="button"
            className={classNames(
              'flex h-12 items-center justify-center font-medium lowercase tracking-wide transition',
              location === link.title
                ? 'font-bold text-white dark:text-white'
                : 'font-normal text-white/30 hover:text-white dark:text-white/50 dark:hover:text-white'
            )}
          >
            <span className="flex items-center justify-center gap-x-1.5">
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
          className={classNames(
            'flex h-auto items-center justify-center font-medium lowercase tracking-wide transition',
            location === link.title
              ? 'text-tertiary dark:text-white'
              : 'text-gray-800/70 hover:text-gray-800 dark:text-white/60 dark:hover:text-white'
          )}
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

export default Navbar
