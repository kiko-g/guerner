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
      className="flex rounded bg-primary p-0.5 text-white transition hover:opacity-80 dark:bg-white/10"
      onClick={() => setView(false)}
    >
      <QueueListIcon className="h-8 w-8" />
    </button>
  ) : (
    <button
      title="Change to list view"
      className="flex rounded bg-primary p-0.5 text-white transition hover:opacity-80 dark:bg-white/10"
      onClick={() => setView(true)}
    >
      <Squares2X2Icon className="h-8 w-8" />
    </button>
  )
}
