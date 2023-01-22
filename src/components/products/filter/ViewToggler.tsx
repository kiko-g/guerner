import React, { Dispatch, SetStateAction } from 'react'
import { QueueListIcon, Squares2X2Icon } from '@heroicons/react/24/outline'

type Props = {
  hook: [boolean, Dispatch<SetStateAction<boolean>>]
}

export default function ViewToggler({ hook }: Props) {
  const [view, setView] = hook

  return view ? (
    <button
      title="Change to grid view"
      className="flex rounded border-2 border-primary bg-primary/80 p-1 text-white 
      transition hover:opacity-80 dark:border-white/10 dark:bg-white/10"
      onClick={() => setView(false)}
    >
      <QueueListIcon className="h-6 w-6" />
    </button>
  ) : (
    <button
      title="Change to list view"
      className="flex rounded border-2 border-primary bg-primary/80 p-1 text-white 
      transition hover:opacity-80 dark:border-white/10 dark:bg-white/10"
      onClick={() => setView(true)}
    >
      <Squares2X2Icon className="h-6 w-6" />
    </button>
  )
}
