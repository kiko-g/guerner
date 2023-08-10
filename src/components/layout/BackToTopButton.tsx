import React, { useState } from 'react'
import classNames from 'classnames'
import { useMediaQuery } from 'usehooks-ts'
import { ChevronDoubleUpIcon } from '@heroicons/react/24/outline'

export default function BackToTopButton() {
  const [hidden, setHidden] = useState(true)

  const centered = false
  const isMobile = useMediaQuery('(max-width: 768px)')

  if (typeof window !== 'undefined') {
    window.onscroll = () => {
      setHidden(window.scrollY < 400)
    }
  }

  return (
    <button
      hidden={hidden || isMobile}
      onClick={() => document.getElementById('layout')!.scrollIntoView()}
      className={classNames(
        centered ? 'bottom-3 left-[calc(50%-1.25rem)]' : 'bottom-6 right-6',
        'fixed z-50 rounded-full bg-primary/30 p-1.5 text-white transition-all hover:-translate-y-1 hover:bg-secondary/75 dark:bg-black/30 dark:hover:bg-tertiary/50'
      )}
    >
      <ChevronDoubleUpIcon className="h-7 w-7" />
    </button>
  )
}
