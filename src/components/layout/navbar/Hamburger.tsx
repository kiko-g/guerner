import React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'
import { routes, translations } from '../../../config'
import { useLanguage } from '../../../hooks/useLanguageContext'
import { Disclosure, Transition } from '@headlessui/react'
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/outline'
import DarkModeSwitch from './DarkModeSwitch'

interface HamburgerProps {
  open: boolean
}

export default function Hamburger({ open }: HamburgerProps) {
  const { language, setLanguage } = useLanguage()

  return (
    <div
      className={classNames(
        'z-50 md:hidden',
        open
          ? 'absolute top-2 right-2 my-auto flex h-6 w-auto items-center justify-end gap-x-2'
          : 'flex w-full items-center justify-between'
      )}
    >
      {open ? (
        <div className="flex items-center gap-x-1">
          <Link to={routes[language].home}>
            <img
              alt="Guerner"
              src={'/images/icon.png'}
              className={classNames('rounded-full', open ? 'h-5 w-5' : 'h-6 w-6')}
            />
          </Link>
          <DarkModeSwitch />
          <Disclosure.Button
            className="group text-white transition duration-200 ease-in 
          dark:text-white md:hidden"
          >
            <span className="sr-only">Open nav menu</span>
            {open ? (
              <XMarkIcon
                className="ease block h-6 w-6 transition duration-200 group-hover:text-white/50 
              dark:group-hover:text-secondary/75"
                aria-hidden="true"
              />
            ) : (
              <Bars4Icon
                className="ease block h-6 w-6 transition duration-200 group-hover:text-white/50 
              dark:group-hover:text-secondary/75"
                aria-hidden="true"
              />
            )}
          </Disclosure.Button>
        </div>
      ) : (
        <>
          <Link to={routes[language].home}>
            <img
              alt="Guerner"
              src={'/images/icon.png'}
              className={classNames('rounded-full', open ? 'h-5 w-5' : 'h-6 w-6')}
            />
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
        </>
      )}
    </div>
  )
}
