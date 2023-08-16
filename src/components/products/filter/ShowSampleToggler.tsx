import React, { Dispatch, SetStateAction } from 'react'
import { IdentificationIcon as IdentificationIconOutline } from '@heroicons/react/24/outline'
import { IdentificationIcon as IdentificationIconSolid } from '@heroicons/react/24/solid'

type Props = {
  hook: [boolean, Dispatch<SetStateAction<boolean>>]
}

export default function ShowSampleToggler({ hook }: Props) {
  const [show, setShow] = hook

  return show ? (
    <button
      title="Hide sample ID badge"
      className="flex rounded border-2 border-primary bg-primary/80 p-1 text-white 
      transition hover:opacity-80 dark:border-white/10 dark:bg-white/10"
      onClick={() => setShow(false)}
    >
      <IdentificationIconSolid className="h-6 w-6" />
    </button>
  ) : (
    <button
      title="Show sample ID badge"
      className="flex rounded border-2 border-primary bg-primary/80 p-1 text-white 
      transition hover:opacity-80 dark:border-white/10 dark:bg-white/10"
      onClick={() => setShow(true)}
    >
      <IdentificationIconOutline className="h-6 w-6" />
    </button>
  )
}
