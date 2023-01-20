import React, { useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { ChevronDoubleUpIcon } from '@heroicons/react/24/outline'

const BackToTopButton = () => {
  const [hidden, setHidden] = useState(true)

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
      className="fixed bottom-3 left-[calc(50%-1.25rem)] z-50 rounded-md p-1 text-white transition-all hover:-translate-y-1 hover:bg-primary/75 dark:hover:bg-secondary/50"
    >
      <ChevronDoubleUpIcon className="h-7 w-7" />
    </button>
  )
}

export default BackToTopButton
