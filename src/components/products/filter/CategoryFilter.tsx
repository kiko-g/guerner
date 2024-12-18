import React from 'react'
import clsx from 'clsx'
import { Listbox } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { Category } from '../../../types'
import { useI18next } from 'gatsby-plugin-react-i18next'

type Props = {
  categories: string[]
  hook: [Category[], React.Dispatch<React.SetStateAction<Category[]>>]
}

export default function CategoryFilter({ categories, hook }: Props) {
  const { t, language } = useI18next()
  const [pickedCategories, setPickedCategories] = hook
  const text = t('categories')

  return (
    <Listbox as="div" multiple value={pickedCategories} onChange={setPickedCategories} className="relative w-full">
      {({ open }) => (
        <>
          <Listbox.Button
            className="flex w-full items-center justify-center gap-x-0.5 rounded border-2 border-primary bg-primary/80
            px-2 py-1.5 text-white transition hover:opacity-80 dark:border-white/10 dark:bg-white/10"
          >
            <span className="text-sm font-normal">{text}</span>
          </Listbox.Button>

          <Listbox.Options
            className={clsx(
              'z-40 rounded-md px-0 py-1 text-sm shadow-xl',
              'border-2 border-white bg-white dark:border-[#434b51] dark:bg-[#2e373d]',
              open ? 'absolute right-0 mt-2 w-full lg:w-64' : 'hidden',
            )}
          >
            {/* Option box header */}
            <div
              className="flex w-full items-center justify-between border-b
              px-3 pb-2 pt-1 font-normal tracking-tighter"
            >
              <span>{pickedCategories.length} selected</span>
              <button
                type="button"
                className="tracking-tighter text-primary underline hover:font-bold hover:opacity-80 dark:text-tertiary"
                onClick={() => setPickedCategories([])}
              >
                Reset
              </button>
            </div>

            {/* Option box body (options list) */}
            <div className="py-1">
              {categories.map((category: string, categoryIdx: number) => {
                const translatedCategory = t(`categories.${category}`)
                return (
                  <Listbox.Option
                    key={`category-${categoryIdx}`}
                    value={category}
                    className={({ active }) =>
                      clsx(
                        'relative cursor-default select-none py-2 pl-3 pr-3',
                        active ? 'bg-zinc-200 dark:bg-zinc-600' : '',
                      )
                    }
                  >
                    {({ selected }) => (
                      <span className="flex items-center gap-2">
                        {selected ? (
                          <span className="h-5 w-5 text-teal-500">
                            <CheckCircleIcon className="" aria-hidden="true" />
                          </span>
                        ) : (
                          <span className="h-5 w-5 text-teal-500"></span>
                        )}
                        <span className={`block truncate ${selected ? 'font-bold' : 'font-normal'}`}>
                          {translatedCategory}
                        </span>
                      </span>
                    )}
                  </Listbox.Option>
                )
              })}
            </div>
          </Listbox.Options>
        </>
      )}
    </Listbox>
  )
}
