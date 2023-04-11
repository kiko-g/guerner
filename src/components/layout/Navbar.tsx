import React from 'react'
import classNames from 'classnames'
import { Disclosure } from '@headlessui/react'
import {
  HomeModernIcon,
  BriefcaseIcon,
  ShoppingCartIcon,
  PhoneArrowDownLeftIcon,
} from '@heroicons/react/24/outline'
import Header from './navbar/Header'
import Hamburger from './navbar/Hamburger'
import FoldableMobileMenu from './navbar/FoldableMobileMenu'
import { useI18next } from 'gatsby-plugin-react-i18next'

interface NavbarProps {
  title: string
  location: string
  special?: boolean
}

export default function Navbar({ title, location, special }: NavbarProps) {
  const { t, language, defaultLanguage } = useI18next()
  const isDefaultLanguage = language === defaultLanguage
  const navigation = [
    {
      title: t('home'),
      location: isDefaultLanguage ? '/' : `/${language}/`,
      icon: <HomeModernIcon className="h-5 w-5" />,
    },
    {
      title: t('company'),
      location: isDefaultLanguage ? '/company' : `/${language}/company`,
      icon: <BriefcaseIcon className="h-5 w-5" />,
    },
    {
      title: t('products'),
      location: isDefaultLanguage ? '/products' : `/${language}/products`,
      icon: <ShoppingCartIcon className="h-5 w-5" />,
    },
    {
      title: t('contacts'),
      location: isDefaultLanguage ? '/contacts' : `/${language}/contacts`,
      icon: <PhoneArrowDownLeftIcon className="h-5 w-5" />,
    },
  ]

  return (
    <Disclosure
      as="nav"
      defaultOpen={false}
      className={classNames(
        'top-0 z-20 w-full px-3 py-3 shadow shadow-black/50 backdrop-blur md:px-4 md:py-4',
        special
          ? 'fixed bg-black/50 text-white dark:bg-black/30'
          : 'sticky bg-primary text-white dark:bg-navy dark:text-white'
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
