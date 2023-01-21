import React from 'react'
import { routes, translations } from '../../../config'
import { Language, NavItem } from '../../../types'
import {
  HomeModernIcon,
  BriefcaseIcon,
  ShoppingCartIcon,
  PhoneArrowDownLeftIcon,
} from '@heroicons/react/24/outline'
import Header from './Header'
import Hamburger from './Hamburger'
import DarkModeSwitch from './DarkModeSwitch'
import LanguageSwitch from './LanguageSwitch'
import FoldableMobileMenu from './FoldableMobileMenu'

const getNavigation = (language: Language): NavItem[] => {
  return [
    {
      title: translations[language].navbar.home,
      location: routes[language].home,
      icon: <HomeModernIcon className="h-5 w-5" />,
    },
    {
      title: translations[language].navbar.company,
      location: routes[language].company,
      icon: <BriefcaseIcon className="h-5 w-5" />,
    },
    {
      title: translations[language].navbar.products,
      location: routes[language].products.main,
      icon: <ShoppingCartIcon className="h-5 w-5" />,
    },
    {
      title: translations[language].navbar.contacts,
      location: routes[language].contacts,
      icon: <PhoneArrowDownLeftIcon className="h-5 w-5" />,
    },
  ]
}

export {
  Header,
  Hamburger,
  FoldableMobileMenu,
  DarkModeSwitch,
  LanguageSwitch,
  NavItem,
  getNavigation,
}
