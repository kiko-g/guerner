import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import DarkModeSwitch from './DarkModeSwitch'
import { useMediaQuery } from 'usehooks-ts'
import { Link } from 'gatsby'
import { Disclosure, Transition } from '@headlessui/react'
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { HomeIcon, BriefcaseIcon, ShoppingCartIcon, PhoneArrowDownLeftIcon } from '@heroicons/react/24/outline'

const navigation = [
  { title: 'Início', location: '/', icon: <HomeIcon className="h-5 w-5" /> },
  { title: 'Empresa', location: '/empresa', icon: <BriefcaseIcon className="h-5 w-5" /> },
  { title: 'Produtos', location: '/produtos', icon: <ShoppingCartIcon className="h-5 w-5" /> },
  { title: 'Contactos', location: '/contactos', icon: <PhoneArrowDownLeftIcon className="h-5 w-5" /> },
]

type Props = {
  title: string
  location: string
  special?: boolean
}

const Navbar = ({ title, location, special }: Props) => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <Disclosure
      as="nav"
      defaultOpen={isMobile}
      className={classNames(
        'sticky top-0 z-20 w-full px-3 py-3 md:px-6 md:py-4',
        special
          ? 'bg-primary text-white dark:bg-navy dark:text-white'
          : 'bg-primary text-white dark:bg-navy dark:text-white'
      )}
    >
      {({ open }) => {
        return (
          <>
            <div
              className={classNames('relative flex w-full items-center justify-between md:py-0', open ? 'p-0' : 'p-2')}
            >
              <Hamburger open={open} />
              <Header title={title} location={location} />
            </div>
            <FoldableMobileMenu location={location} />
          </>
        )
      }}
    </Disclosure>
  )
}

const Hamburger = ({ open }: { open: boolean }) => (
  <div
    className={classNames(
      'z-50 w-full md:hidden',
      open
        ? 'absolute top-2 right-2 my-auto flex h-6 items-center justify-end gap-x-2'
        : 'flex w-full items-center justify-between'
    )}
  >
    <Link to="/">
      <img alt="Guerner" src={'/images/avatar.png'} className={classNames('avatar', open ? 'h-5 w-5' : 'h-6 w-6')} />
    </Link>

    <div className="flex items-center gap-x-1">
      <DarkModeSwitch />
      <Disclosure.Button className="group text-white transition duration-200 ease-in dark:text-white md:hidden">
        <span className="sr-only">Open nav menu</span>
        {open ? (
          <XMarkIcon
            className="ease block h-7 w-7 transition duration-200 group-hover:text-white/50 dark:group-hover:text-secondary/75"
            aria-hidden="true"
          />
        ) : (
          <Bars4Icon
            className="ease block h-7 w-7 transition duration-200 group-hover:text-white/50 dark:group-hover:text-secondary/75"
            aria-hidden="true"
          />
        )}
      </Disclosure.Button>
    </div>
  </div>
)

const Header = ({ title, location }: Props) => (
  <div className="hidden w-full items-center justify-between md:flex md:items-stretch md:justify-between">
    <div className="relative hidden h-auto transition hover:opacity-75 md:flex md:items-center">
      <Link to="/" className="group flex items-center gap-x-3">
        <img src={'/images/avatar.png'} alt="Guerner" className="z-20 inline-flex h-8 w-8 rounded-full transition" />
        <h2 className="text-xs font-bold tracking-tighter duration-150 group-hover:underline md:text-lg">{title}</h2>
      </Link>
    </div>

    <div className="hidden md:flex md:flex-col md:items-end md:justify-center md:gap-y-1.5">
      <div>
        <DarkModeSwitch />
      </div>
      <div className="flex gap-x-6">
        {navigation.map((link, index) => (
          <Link to={link.location} key={`nav-${index}`} className="relative">
            <button
              type="button"
              className={classNames(
                'flex items-center justify-center lowercase tracking-wide transition',
                location === link.title
                  ? 'font-bold text-white dark:text-white'
                  : 'font-normal text-white/30 hover:text-white dark:text-white/25 dark:hover:text-white'
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
    </div>
  </div>
)

const FoldableMobileMenu = ({ location }: { location: string }) => (
  <Transition
    enter="transition duration-100 ease-out"
    enterFrom="transform scale-95 opacity-0"
    enterTo="transform scale-100 opacity-100"
    leave="transition duration-75 ease-out"
    leaveFrom="transform scale-100 opacity-100"
    leaveTo="transform scale-95 opacity-0"
    className="z-50"
  >
    <Disclosure.Panel className="flex flex-col space-y-3 py-2 md:hidden">
      {navigation.map((link, index) => (
        <Link to={link.location} className="relative z-50 h-auto w-min px-4" key={`mobile-nav-${index}`}>
          <button
            type="button"
            className={classNames(
              'flex h-auto items-center justify-center lowercase tracking-wide transition',
              location === link.title
                ? 'font-bold text-white dark:text-white'
                : 'font-normal text-white/25 hover:text-white dark:text-white/30 dark:hover:text-white'
            )}
          >
            <span className="flex items-center justify-center gap-x-1.5">
              {link.icon}
              {link.title}
            </span>
            {location === link.title ? (
              <span className="absolute left-0.5 h-full w-1 rounded-sm bg-secondary dark:bg-secondary" />
            ) : null}
          </button>
        </Link>
      ))}
    </Disclosure.Panel>
  </Transition>
)

export default Navbar
