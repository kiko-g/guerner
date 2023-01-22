import React from 'react'
import classNames from 'classnames'
import { translations } from '../../../config'
import { Listbox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { Category } from '../../../types'
import { useLanguage } from '../../../hooks/useLanguageContext'

type Props = {
  hook: [Category[], React.Dispatch<React.SetStateAction<Category[]>>]
}

export default function CategoryFilter({ hook }: Props) {
  const { language } = useLanguage()
  const [pickedCategories, setPickedCategories] = hook
  const categories = Object.keys(translations['en'].category)
  const text = `Categorias`

  return (
    <Listbox
      as="div"
      multiple
      value={pickedCategories}
      onChange={setPickedCategories}
      className="relative"
    >
      {({ open }) => (
        <>
          <Listbox.Button
            className="flex items-center justify-center gap-x-0.5 rounded border-2 border-primary bg-primary/80 
            py-1.5 px-2 text-white transition hover:opacity-80 dark:border-white/10 dark:bg-white/10"
          >
            <span className="text-sm font-normal">{text}</span>
          </Listbox.Button>

          <Listbox.Options
            className={classNames(
              'z-40 rounded-md px-0 py-1 text-sm shadow-xl',
              'border-2 border-white bg-white dark:border-[#434b51] dark:bg-[#2e373d]',
              open ? 'absolute right-0 mt-2 w-64' : 'hidden'
            )}
          >
            <div className="flex w-full items-center justify-between border-b px-4 pt-1 pb-2 font-normal tracking-tight">
              <span>{pickedCategories.length} selected</span>
              <button
                type="button"
                className="font-bold text-primary underline hover:opacity-80 dark:text-secondary"
                onClick={() => setPickedCategories([])}
              >
                Reset
              </button>
            </div>

            {categories.map((category, categoryIdx) => (
              <Listbox.Option
                key={`category-${categoryIdx}`}
                value={category}
                className={({ active }) =>
                  `relative cursor-default select-none py-1.5 pl-9 pr-4 ${
                    active ? 'bg-teal-100 text-primary dark:bg-orange-100 dark:text-secondary' : ''
                  }`
                }
              >
                {({ selected }) => (
                  <>
                    <span className={`block truncate ${selected ? 'font-bold' : 'font-normal'}`}>
                      {category}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-2.5 text-primary dark:text-secondary">
                        <CheckIcon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </>
      )}
    </Listbox>
  )
}
