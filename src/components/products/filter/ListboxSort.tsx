import React, { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronUpDownIcon, FunnelIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { t } from 'i18next'

type Props = {
  options: string[]
  translatedOptions?: string[]
  pickedHook: [string, React.Dispatch<React.SetStateAction<string>>]
}

export default function ListboxSort({ options, translatedOptions, pickedHook }: Props) {
  const [picked, setPicked] = pickedHook

  return (
    <Listbox value={picked} onChange={setPicked}>
      <div className="relative">
        <Listbox.Button
          as="button"
          className="flex rounded border-2 border-primary bg-primary/80 p-1 text-white transition hover:opacity-80 dark:border-white/10 dark:bg-white/10"
        >
          <FunnelIcon className="h-6 w-6" />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute right-0 z-50 mt-2 w-72 overflow-auto rounded border border-gray-300 bg-gray-100 py-2 shadow xl:w-72">
            {options.map((option: string, optionIdx: number) => (
              <Listbox.Option
                key={`option-${optionIdx}`}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-1.5 pl-10 pr-5 text-sm font-normal tracking-tight ${
                    active
                      ? 'bg-primary/10 text-primary dark:bg-tertiary/10 dark:text-tertiary'
                      : 'text-gray-800'
                  }`
                }
                value={option}
              >
                <span
                  className={`block whitespace-nowrap ${
                    option === picked ? 'font-semibold' : 'font-normal'
                  }`}
                >
                  {translatedOptions ? translatedOptions[optionIdx] : option}
                </span>
                {picked === option ? (
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-teal-500">
                    <CheckCircleIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                ) : null}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}
