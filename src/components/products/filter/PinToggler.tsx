import React, { Dispatch, SetStateAction } from 'react'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline'

type Props = {
  hook: [boolean, Dispatch<SetStateAction<boolean>>]
}

export default function PinToggler({ hook }: Props) {
  const [pin, setPinned] = hook

  return pin ? (
    <button
      title="Change to grid view"
      className="flex rounded border-2 border-primary bg-primary/80 p-1 text-white 
      transition hover:opacity-80 dark:border-white/10 dark:bg-white/10"
      onClick={() => setPinned(false)}
    >
      <StarIconSolid className="h-6 w-6" />
    </button>
  ) : (
    <button
      title="Change to list view"
      className="flex rounded border-2 border-primary bg-primary/80 p-1 text-white 
      transition hover:opacity-80 dark:border-white/10 dark:bg-white/10"
      onClick={() => setPinned(true)}
    >
      <StarIconOutline className="h-6 w-6" />
    </button>
  )
}
