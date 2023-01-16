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
      className="flex rounded bg-primary p-0.5 text-white transition hover:opacity-80 dark:bg-white/10"
      onClick={() => setPinned(false)}
    >
      <StarIconSolid className="h-8 w-8" />
    </button>
  ) : (
    <button
      title="Change to list view"
      className="flex rounded bg-primary p-0.5 text-white transition hover:opacity-80 dark:bg-white/10"
      onClick={() => setPinned(true)}
    >
      <StarIconOutline className="h-8 w-8" />
    </button>
  )
}
