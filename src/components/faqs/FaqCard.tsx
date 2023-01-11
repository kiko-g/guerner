import React from 'react'
import classNames from 'classnames'
import { FAQ } from '../../@types'
import { Transition, Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/24/outline'

type Props = {
  faq: FAQ
  faqIdx: number
}

const FaqCard = ({ faq, faqIdx }: Props) => {
  return (
    <Disclosure
      as="div"
      defaultOpen={true}
      key={`planner-faq-${faqIdx}`}
      className="rounded-2xl bg-white p-3 dark:bg-dark"
    >
      {({ open }) => (
        <>
          <Disclosure.Button
            className="group flex w-full items-center justify-between gap-1 rounded-lg bg-primary/80 px-3 py-2 
            text-sm font-medium tracking-tight text-white transition hover:bg-secondary hover:text-white 
            dark:bg-secondary/70 dark:text-white dark:hover:bg-secondary/50 lg:px-4 lg:text-base"
          >
            <span className="text-left">{faq.question}</span>
            <ChevronUpIcon
              className={classNames(
                'h-5 w-5 min-w-[1.25rem] transition group-hover:text-white lg:h-6 lg:w-6 lg:min-w-[1.5rem]',
                open ? 'rotate-180 transform' : ''
              )}
            />
          </Disclosure.Button>

          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="w-full px-2 py-3 text-gray-700 dark:text-white">
              {faq.answer}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

export default FaqCard
