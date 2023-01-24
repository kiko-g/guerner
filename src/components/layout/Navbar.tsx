import React from 'react'
import classNames from 'classnames'
import { useLanguage } from '../../hooks/useLanguageContext'
import { Disclosure } from '@headlessui/react'

import { getNavigation } from './navbar'
import Header from './navbar/Header'
import Hamburger from './navbar/Hamburger'
import FoldableMobileMenu from './navbar/FoldableMobileMenu'

interface NavbarProps {
  title: string
  location: string
  special?: boolean
}

export default function Navbar({ title, location, special }: NavbarProps) {
  const { language } = useLanguage()
  const navigation = getNavigation(language)

  return (
    <Disclosure
      as="nav"
      defaultOpen={false}
      className={classNames(
        'sticky top-0 z-20 w-full px-3 py-2 shadow shadow-black/50 md:px-5 md:py-3.5',
        special
          ? 'bg-black/40 text-white dark:bg-black/60'
          : 'bg-primary text-white dark:bg-navy dark:text-white'
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
              <Header title={title} location={location} navigation={navigation} />
            </div>
            <FoldableMobileMenu navigation={navigation} location={location} />
          </>
        )
      }}
    </Disclosure>
  )
}
