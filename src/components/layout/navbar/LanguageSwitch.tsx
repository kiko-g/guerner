import React from 'react'
import classNames from 'classnames'
import { Language } from '../../../types'
import { Switch } from '@headlessui/react'
import { LanguageIcon } from '@heroicons/react/24/solid'

type Props = {
  languageHook: [Language, React.Dispatch<React.SetStateAction<Language>>]
}

export default function LanguageSwitch({ languageHook }: Props) {
  const [language, setLanguage] = languageHook

  return (
    <Switch.Group>
      <Switch
        checked={language === 'pt'}
        onChange={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
        className={classNames(
          'group flex items-center justify-center gap-x-0.5 rounded-full text-sm'
        )}
      >
        <LanguageIcon className="ease block h-5 w-5 text-white transition-all group-hover:opacity-80 dark:text-white md:h-7 md:w-7" />
        <div className="flex flex-col -space-y-1 group-hover:opacity-80">
          {language === 'pt' ? <span>PT</span> : <span>EN</span>}
          {language === 'pt' ? <span>🇵🇹</span> : <span>🇬🇧</span>}
        </div>
      </Switch>
    </Switch.Group>
  )
}
