import React from 'react'
import clsx from 'clsx'
import { Disclosure } from '@headlessui/react'
import { HomeModernIcon, BriefcaseIcon, ShoppingCartIcon, PhoneArrowDownLeftIcon } from '@heroicons/react/24/outline'
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
      isProducts: false,
    },
    {
      title: t('company'),
      location: isDefaultLanguage ? '/company' : `/${language}/company`,
      icon: <BriefcaseIcon className="h-5 w-5" />,
      isProducts: false,
    },
    {
      title: t('products'),
      location: isDefaultLanguage ? '/products' : `/${language}/products`,
      icon: <ShoppingCartIcon className="h-5 w-5" />,
      isProducts: true,
    },
    {
      title: t('contacts'),
      location: isDefaultLanguage ? '/contacts' : `/${language}/contacts`,
      icon: <PhoneArrowDownLeftIcon className="h-5 w-5" />,
      isProducts: false,
    },
  ]

  return (
    <Disclosure
      as="nav"
      defaultOpen={false}
      className={clsx(
        'top-0 z-20 w-full border-b border-white/10 px-3 py-3 backdrop-blur lg:px-6 lg:py-4 dark:border-white/10',
        special
          ? 'fixed bg-black/50 text-white dark:bg-black/30'
          : 'sticky bg-primary text-white dark:bg-zinc-900/80 dark:text-white',
      )}
    >
      {({ open }) => {
        return (
          <>
            <div className={clsx('relative flex w-full items-center justify-between lg:py-0', open ? 'p-0' : 'p-2')}>
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
