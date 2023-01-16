import React, { Fragment, useState } from 'react'
import classNames from 'classnames'
import { XMarkIcon, PaintBrushIcon } from '@heroicons/react/24/outline'
import { Menu, Transition } from '@headlessui/react'
import '../../styles/colors.css'

type Props = {
  hook: [string, React.Dispatch<React.SetStateAction<string>>]
}

export default function ColorFilter({ hook }: Props) {
  const colors = [
    'white',
    'black',
    'gray',
    'red',
    'green',
    'blue',
    'orange',
    'brown',
    'yellow',
    'purple',
    'pink',
  ]

  const [pickedColor, setPickedColor] = hook

  return (
    <Menu as="div" className="relative">
      {({ open }) => (
        <>
          <Menu.Button
            className="flex items-center gap-x-3 rounded-full border-2 border-primary bg-primary 
            py-1 px-2 text-white transition hover:opacity-80 dark:border-white/10 dark:bg-white/10"
          >
            {pickedColor !== '' ? (
              <span
                className={classNames(pickedColor, 'h-5 w-5 rounded-full border-[2px] shadow')}
              />
            ) : (
              <span className="h-5 w-5 rounded-full bg-white shadow">
                <XMarkIcon className="h-5 w-5 text-red-700 dark:text-rose-500" />
              </span>
            )}

            <PaintBrushIcon className="h-6 w-6" />
          </Menu.Button>
          {open ? (
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                className={classNames(
                  open
                    ? 'absolute right-0 z-40 mt-3 w-32 rounded-xl bg-white p-4 shadow-xl dark:bg-[#2e373d]'
                    : 'hidden'
                )}
              >
                <div className="grid grid-cols-3 gap-4">
                  <Menu.Item
                    as="button"
                    onClick={() => setPickedColor('')}
                    className={classNames(
                      pickedColor === '' ? 'ring-2 ring-primary dark:ring-secondary' : '',
                      'flex h-6 w-6 items-center justify-center rounded-full p-[0px]',
                      'z-50 bg-white transition hover:cursor-pointer hover:opacity-80'
                    )}
                  >
                    <XMarkIcon className="h-5 w-5 text-red-700 dark:text-rose-500" />
                  </Menu.Item>
                  {colors.map((color, colorIdx) => (
                    <Menu.Item
                      as="button"
                      onClick={() => setPickedColor(color)}
                      key={`color-${colorIdx}`}
                      className={classNames(
                        color === 'white' ? 'border-[2px] border-gray-400' : 'border-0',
                        color === pickedColor
                          ? 'ring-2 ring-primary ring-offset-2 dark:ring-secondary'
                          : '',
                        'flex h-6 w-6 items-center justify-center rounded-full p-1',
                        'z-50 shadow-md transition hover:cursor-pointer hover:opacity-80',
                        color === '' ? 'p-[0px]' : color
                      )}
                    />
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          ) : null}
        </>
      )}
    </Menu>
  )
}
