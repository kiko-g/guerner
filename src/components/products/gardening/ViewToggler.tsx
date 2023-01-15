import React, { Dispatch, SetStateAction } from 'react'
import { QueueListIcon, Squares2X2Icon } from '@heroicons/react/24/outline'

type Props = {
  hook: [boolean, Dispatch<SetStateAction<boolean>>]
}

export default function ViewToggler({ hook }: Props) {
  const [view, setView] = hook

  return (
    <div
      className="hidden items-end justify-center space-x-2 rounded border-0 
      bg-primary p-1 text-white dark:text-light md:flex"
    >
      {view ? (
        <button title="Change to grid view" className="transition hover:opacity-75" onClick={() => setView(false)}>
          <QueueListIcon className="h-8 w-8" />
        </button>
      ) : (
        <button title="Change to list view" className="transition hover:opacity-75" onClick={() => setView(true)}>
          <Squares2X2Icon className="h-8 w-8" />
        </button>
      )}
    </div>
  )
}
