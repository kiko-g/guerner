import React, { useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { ChevronDoubleUpIcon } from '@heroicons/react/24/outline'

const BackToTopButton = () => {
  const [hidden, setHidden] = useState(true)

  const isMobile = useMediaQuery('(max-width: 768px)')

  if (typeof window !== 'undefined') {
    window.onscroll = () => {
      setHidden(window.scrollY < 500)
    }
  }

  return (
    <button
      hidden={hidden || isMobile}
      onClick={() => document.getElementById('layout')!.scrollIntoView()}
      className="fixed bottom-3 left-1/2 z-50 rounded p-1 text-white transition-all hover:-translate-y-1 hover:bg-black/50"
    >
      <ChevronDoubleUpIcon className="h-6 w-6" />
    </button>
  )
}

export default BackToTopButton
