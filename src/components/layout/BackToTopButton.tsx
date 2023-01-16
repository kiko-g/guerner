// @ts-nocheck
import React, { useState } from 'react'
import { ChevronUpIcon } from '@heroicons/react/24/outline'

const BackToTopButton = () => {
  const [hidden, setHidden] = useState(true)

  if (typeof window !== 'undefined') {
    window.onscroll = () => {
      setHidden(window.scrollY < 500)
    }
  }

  return (
    <button
      hidden={hidden}
      onClick={() => document.getElementById('layout').scrollIntoView()}
      className="fixed bottom-6 right-6 z-50 rounded-full bg-slate-500/50 p-2 text-white transition-all 
      hover:bg-tertiary dark:bg-darkish dark:text-white hover:dark:bg-secondary xl:p-3"
    >
      <ChevronUpIcon className="h-6 w-6" />
    </button>
  )
}

export default BackToTopButton
