import React from 'react'
import classNames from 'classnames'
import { Listbox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { Category, Language } from '../../../types'
import { useI18next } from 'gatsby-plugin-react-i18next'

type Props = {
  hook: [Category[], React.Dispatch<React.SetStateAction<Category[]>>]
}

export default function CategoryFilter({ hook }: Props) {
  const { t, language } = useI18next()
  const [pickedCategories, setPickedCategories] = hook
  const categories = ['a', 'b', 'c', 'd']
  const text = t('categories')

  return (
    <Listbox
      as="div"
      multiple
      value={pickedCategories}
      onChange={setPickedCategories}
      className="relative w-full"
    >
      {({ open }) => (
        <>
          <Listbox.Button
            className="flex w-full items-center justify-center gap-x-0.5 rounded border-2 border-primary bg-primary/80 
            py-1.5 px-2 text-white transition hover:opacity-80 dark:border-white/10 dark:bg-white/10"
          >
            <span className="text-sm font-normal">{text}</span>
          </Listbox.Button>

          <Listbox.Options
            className={classNames(
              'z-40 rounded-md px-0 py-1 text-sm shadow-xl',
              'border-2 border-white bg-white dark:border-[#434b51] dark:bg-[#2e373d]',
              open ? 'absolute right-0 mt-2 w-full lg:w-64' : 'hidden'
            )}
          >
            {/* Option box header */}
            <div
              className="flex w-full items-center justify-between border-b 
              px-3 pt-1 pb-2 font-normal tracking-tighter"
            >
              <span>{pickedCategories.length} selected</span>
              <button
                type="button"
                className="tracking-tighter text-primary underline hover:font-bold hover:opacity-80 dark:text-secondary"
                onClick={() => setPickedCategories([])}
              >
                Reset
              </button>
            </div>

            {/* Option box body (options list) */}
            <div className="py-1">
              {categories.map((category, categoryIdx) => (
                <Listbox.Option
                  key={`category-${categoryIdx}`}
                  value={category}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-8 pr-4 ${
                      active ? 'bg-teal-100 text-primary dark:bg-secondary/50 dark:text-white' : ''
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
            </div>
          </Listbox.Options>
        </>
      )}
    </Listbox>
  )
}
