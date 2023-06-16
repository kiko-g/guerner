import React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'
import { NavItem } from '../../../types'
import { useI18next } from 'gatsby-plugin-react-i18next'
import Settings from './Settings'

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
        {/* Logo Link */}
        <Link to="/" className="group flex items-center gap-x-3 transition hover:opacity-80">
          <img
            alt="Guerner"
            src={'/images/icon.png'}
            className="z-20 inline-flex h-9 w-9 rounded-full transition"
          />
          <span className="max-w-[6rem] text-xs font-semibold leading-3 tracking-tighter duration-150 group-hover:underline md:text-sm md:leading-5">
            {title}
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="ml-4 flex gap-x-4">
          {navigation.map((link, index) => {
            const isActive = t(location).toLowerCase() === t(link.title).toLowerCase()
            return (
              <Link to={link.location} key={`nav-${index}`} className="relative">
                <button
                  type="button"
                  className={classNames(
                    'flex items-center justify-center rounded-sm px-3 py-1.5 font-normal transition',
                    isActive ? 'bg-white/20' : 'hover:bg-white/10'
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
      <div className="hidden md:flex md:flex-col md:items-end md:justify-center md:gap-y-1">
        <div className="flex items-center justify-center gap-x-3">
          <Settings />
        </div>
      </div>
    </div>
  )
}
