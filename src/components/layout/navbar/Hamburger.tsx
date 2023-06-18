import React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import DarkModeSwitch from './DarkModeSwitch'
import LanguageSwitch from './LanguageSwitch'
import { useI18next } from 'gatsby-plugin-react-i18next'

interface HamburgerProps {
  open: boolean
}

export default function Hamburger({ open }: HamburgerProps) {
  const { t } = useI18next()

  return (
    <div
      className={classNames(
        'z-50 lg:hidden',
        open
          ? 'absolute right-2 top-2 my-auto flex h-6 w-auto items-center justify-end gap-x-2'
          : 'flex w-full items-center justify-between'
      )}
    >
      {open ? (
        <div className="flex items-center justify-center gap-x-1.5">
          <LanguageSwitch />
          <DarkModeSwitch />
          <Disclosure.Button className="group text-white transition duration-200 ease-in dark:text-white lg:hidden">
            <span className="sr-only">Open nav menu</span>
            {open ? (
              <XMarkIcon
                className="ease block h-6 w-6 transition duration-200 group-hover:text-white/50 dark:group-hover:text-secondary/75"
                aria-hidden="true"
              />
            ) : (
              <Bars3Icon
                className="ease block h-6 w-6 transition duration-200 group-hover:text-white/50 dark:group-hover:text-secondary/75"
                aria-hidden="true"
              />
            )}
          </Disclosure.Button>
        </div>
      ) : (
        <>
          <Link to="/">
            <img
              alt="Guerner"
              src={'/images/icon.png'}
              className={classNames('rounded-full', open ? 'h-5 w-5' : 'h-6 w-6')}
            />
          </Link>

          <div className="flex items-center gap-x-1">
            <DarkModeSwitch />
            <Disclosure.Button className="group text-white transition duration-200 ease-in dark:text-white lg:hidden">
              <span className="sr-only">Open nav menu</span>
              {open ? (
                <XMarkIcon
                  className="ease block h-7 w-7 transition duration-200 group-hover:text-white/50 dark:group-hover:text-secondary/75"
                  aria-hidden="true"
                />
              ) : (
                <Bars3Icon
                  className="ease block h-7 w-7 transition duration-200 group-hover:text-white/50 dark:group-hover:text-secondary/75"
                  aria-hidden="true"
                />
              )}
            </Disclosure.Button>
          </div>
        </>
      )}
    </div>
  )
}
