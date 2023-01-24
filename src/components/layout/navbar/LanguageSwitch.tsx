import React, { Fragment, useState } from 'react'
import { Language } from '../../../types'
import { Listbox, Transition } from '@headlessui/react'
import { useLanguage } from '../../../hooks/useLanguageContext'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid'

type Props = {}

export default function LanguageSwitch({}: Props) {
  const { language } = useLanguage()
  const languages = ['pt', 'en'] as Language[]
  const [selected, setSelected] = useState(language)

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative z-10">
        <Listbox.Button
          className="relative flex w-full cursor-pointer items-center justify-center 
          gap-x-0.5 rounded border-2 border-teal-500/20 bg-teal-500/20 py-1 pl-3 pr-2 text-sm 
          shadow transition hover:border-teal-500/50 hover:bg-teal-500/50 md:gap-x-1 md:pl-3 md:pr-1.5"
        >
          <span className="block truncate uppercase tracking-wide">{selected}</span>
          <ChevronUpDownIcon
            className="mt-[1px] h-[1.1rem] w-[1.1rem] text-gray-300 md:h-5 md:w-5"
            aria-hidden="true"
          />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          leave="transition-all duration-100"
        >
          <Listbox.Options
            className="absolute mt-2 w-full overflow-auto rounded bg-gray-50 py-1.5 
            text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            {languages.map((lang, langIdx) => (
              <Listbox.Option
                key={langIdx}
                className={({ active }) =>
                  `relative z-50 flex cursor-pointer select-none items-center justify-start
                  gap-x-1 py-1 px-2.5 text-sm transition md:py-1.5 md:px-2.5 md:text-base ${
                    active ? 'bg-teal-100 text-teal-800' : 'text-gray-900'
                  }`
                }
                value={lang}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`truncate uppercase ${
                        selected ? 'font-bold text-teal-700' : 'font-normal'
                      }`}
                    >
                      {lang}
                    </span>
                    {selected ? (
                      <CheckIcon
                        className="mt-0 h-4 w-4 text-teal-700 md:h-[1.1rem] md:w-[1.1rem]"
                        aria-hidden="true"
                      />
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}
