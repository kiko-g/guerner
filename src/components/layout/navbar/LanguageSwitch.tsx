import React, { Fragment } from 'react'
import classNames from 'classnames'
import { routes, translations } from '../../../config'
import { switchRouteLanguage } from '../../../utils'
import { Language } from '../../../types'
import { Switch, Transition } from '@headlessui/react'
import { LanguageIcon } from '@heroicons/react/24/solid'
import { useLanguage } from '../../../hooks/useLanguageContext'
import { Link } from 'gatsby'

type Props = {}

export default function LanguageSwitch({}: Props) {
  const { language } = useLanguage()
  const languages = ['pt', 'en'] as Language[]
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex flex-row gap-x-4">
      <div
        className={classNames(
          open
            ? 'mr-3 flex flex-row gap-x-1.5 rounded bg-black/25 px-1.5 py-1 dark:bg-white/10'
            : 'hidden'
        )}
      >
        {languages.map(lang => (
          <Link
            key={lang}
            to={switchRouteLanguage(lang)}
            className={classNames(
              'my-auto flex h-min flex-row items-center gap-x-2 rounded-sm px-1 py-0.5 transition hover:bg-white/50',
              language === lang ? 'bg-teal-500' : ''
            )}
          >
            <span className="text-sm font-normal uppercase">{lang}</span>
          </Link>
        ))}
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="rounded-xl border-2 border-teal-700 bg-teal-700/50 p-1 transition hover:bg-teal-700/90"
      >
        <LanguageIcon className="h-6 w-6" />
      </button>
    </div>
  )
}
