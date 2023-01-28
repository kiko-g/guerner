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
  const { t, language } = useI18next()
  const navigation = [
    {
      title: t('home'),
      location: '/',
      icon: <HomeModernIcon className="h-5 w-5" />,
    },
    {
      title: t('company'),
      location: '/company',
      icon: <BriefcaseIcon className="h-5 w-5" />,
    },
    {
      title: t('products'),
      location: '/products',
      icon: <ShoppingCartIcon className="h-5 w-5" />,
    },
    {
      title: t('contacts'),
      location: '/contacts',
      icon: <PhoneArrowDownLeftIcon className="h-5 w-5" />,
    },
  ]

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
