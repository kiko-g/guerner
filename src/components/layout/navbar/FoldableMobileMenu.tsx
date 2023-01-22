import React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'
import { Disclosure, Transition } from '@headlessui/react'
import { NavItem } from '.'

interface FoldableMobileMenuProps {
  location: string
  navigation: NavItem[]
}

export default function FoldableMobileMenu({ location, navigation }: FoldableMobileMenuProps) {
  return (
    <Transition
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <Disclosure.Panel className="flex flex-col space-y-3 py-2 md:hidden">
        {navigation.map((link, index) => (
          <Link
            to={link.location}
            className="relative z-50 h-auto w-min px-4"
            key={`mobile-nav-${index}`}
          >
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
}
