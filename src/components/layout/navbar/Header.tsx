import React, { Fragment } from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'
import { NavItem } from '../../../types'
import { useI18next } from 'gatsby-plugin-react-i18next'
import Settings from './Settings'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronDownIcon,
  ChevronUpDownIcon,
  ChevronUpIcon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'

interface HeaderProps {
  title: string
  location: string
  navigation: NavItem[]
}

export default function Header({ title, location, navigation }: HeaderProps) {
  const { t } = useI18next()
  const useProductsDropdown = true

  return (
    <div className="hidden w-full items-center justify-between lg:flex lg:items-stretch lg:justify-between">
      <div className="relative hidden h-auto transition lg:flex lg:items-center">
        {/* Logo Link */}
        <Link to="/" className="group flex items-center gap-x-3 transition hover:opacity-80">
          <img
            alt="Guerner"
            src={'/images/icon.png'}
            className="z-20 inline-flex h-9 w-9 rounded-full transition"
          />
          <span className="max-w-[6rem] text-xs font-semibold leading-3 tracking-tighter duration-150 group-hover:underline lg:text-sm lg:leading-5">
            {title}
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="ml-4 flex gap-x-4">
          {navigation.map((link, index) => {
            const isActive = t(location).toLowerCase() === t(link.title).toLowerCase()

            if (link.isProducts && useProductsDropdown) {
              return (
                <span
                  className={classNames(
                    'flex items-center group transition hover:bg-white/10 rounded',
                    isActive ? 'bg-white/20' : '',
                  )}
                >
                  <Link to={link.location} key={`nav-${index}`} className="relative">
                    <button
                      type="button"
                      className="flex items-center justify-center group-hover:rounded-l pl-3 pr-3 py-1.5 font-normal transition"
                    >
                      <span className="capitalize tracking-tight">{link.title}</span>
                    </button>
                  </Link>

                  <Popover className="relative flex-1 h-full">
                    {({ open }) => (
                      <>
                        <Popover.Button className="flex-1 h-full transition hover:bg-secondary/40 dark:hover:bg-secondary/30 px-1 rounded-r">
                          {open ? (
                            <ChevronUpIcon className="h-4 w-4" />
                          ) : (
                            <ChevronDownIcon className="h-4 w-4" />
                          )}
                        </Popover.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute right-0 z-10 mt-3 w-screen max-w-xs transform px-4 sm:px-0">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10">
                              <div className="relative flex flex-col gap-2 bg-white p-4 dark:bg-slate-800">
                                <Link
                                  to="/products/agriculture"
                                  className="flex items-center rounded-lg px-3 py-2 transition duration-150 ease-in-out hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-secondary focus-visible:ring-opacity-50 dark:hover:bg-slate-700 text-gray-700 dark:text-white"
                                >
                                  {t('Agriculture')}
                                </Link>

                                <Link
                                  to="/products/construction"
                                  className="flex items-center rounded-lg px-3 py-2 transition duration-150 ease-in-out hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-secondary focus-visible:ring-opacity-50 dark:hover:bg-slate-700 text-gray-700 dark:text-white"
                                >
                                  {t('Construction')}
                                </Link>

                                <Link
                                  to="/products/others"
                                  className="flex items-center rounded-lg px-3 py-2 transition duration-150 ease-in-out hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-secondary focus-visible:ring-opacity-50 dark:hover:bg-slate-700 text-gray-700 dark:text-white"
                                >
                                  {t('Others')}
                                </Link>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                </span>
              )
            }

            return (
              <Link to={link.location} key={`nav-${index}`} className="relative">
                <button
                  type="button"
                  className={classNames(
                    'flex items-center justify-center rounded px-3 py-1.5 font-normal transition',
                    isActive ? 'bg-white/20' : 'hover:bg-white/10',
                  )}
                >
                  <span className="capitalize tracking-tight">{link.title}</span>
                </button>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Settings */}
      <div className="hidden lg:flex lg:flex-col lg:items-end lg:justify-center lg:gap-y-1">
        <div className="flex items-center justify-center gap-x-4">
          <MiniContacts />
          <Settings />
        </div>
      </div>
    </div>
  )
}

function MiniContacts() {
  const email = process.env.GATSBY_GUERNER_EMAIL_ADDRESS
  const phone = process.env.GATSBY_GUERNER_PHONE_NUMBER

  return (
    <div className="hidden lg:flex flex-col gap-y-0.5 items-start text-xs font-light">
      <span className="flex gap-x-1.5 items-center">
        <PhoneIcon className="h-4 w-4" />
        <span>{phone}</span>
      </span>

      <span className="flex gap-x-1.5 items-center">
        <EnvelopeIcon className="h-4 w-4" />
        <a className="hover:underline" href={`mailto:${email}`}>
          {email}
        </a>
      </span>
    </div>
  )
}
