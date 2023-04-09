import React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'
import { NavItem } from '../../../types'
import { useI18next } from 'gatsby-plugin-react-i18next'
import DarkModeSwitch from './DarkModeSwitch'
import LanguageSwitch from './LanguageSwitch'

interface HeaderProps {
  title: string
  location: string
  navigation: NavItem[]
}

export default function Header({ title, location, navigation }: HeaderProps) {
  const { t } = useI18next()

  return (
    <div className="hidden w-full items-center justify-between md:flex md:items-stretch md:justify-between">
      <div className="relative hidden h-auto transition md:flex md:items-center">
        <Link to="/" className="group flex items-center gap-x-3 transition hover:opacity-80">
          <img
            alt="Guerner"
            src={'/images/icon.png'}
            className="z-20 inline-flex h-8 w-8 rounded-full transition"
          />
          <h2 className="text-xs font-bold tracking-tighter duration-150 group-hover:underline md:text-lg">
            {title}
          </h2>
        </Link>
      </div>

      <div className="hidden md:flex md:flex-col md:items-end md:justify-center md:gap-y-2">
        <div className="flex items-center justify-center gap-x-4">
          <LanguageSwitch />
          <DarkModeSwitch />
        </div>
        <div className="flex gap-x-6">
          {navigation.map((link, index) => (
            <Link to={link.location} key={`nav-${index}`} className="relative">
              <button
                type="button"
                className={classNames(
                  'flex items-center justify-center transition',
                  t(location).toLowerCase() === t(link.title).toLowerCase()
                    ? 'font-bold text-white dark:text-white'
                    : 'font-normal text-white/50 hover:text-white dark:text-white/50 dark:hover:text-white'
                )}
              >
                <span className="flex items-center justify-center gap-x-1 tracking-tight">
                  {/* {link.icon} */}
                  <span>{link.title}</span>
                </span>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
