import { ClipboardDocumentCheckIcon, ClipboardIcon } from '@heroicons/react/24/outline'
import React from 'react'

type Props = {
  text: string
}

export default function CopyButton({ text }: Props) {
  const [copied, setCopied] = React.useState(false)
  const handleCopied = (text: string) => {
    setCopied(!copied)
    navigator.clipboard.writeText(text)
  }

  React.useEffect(() => {
    if (copied)
      setTimeout(() => {
        setCopied(!copied)
      }, 3000)
  }, [copied, setCopied])

  return (
    <button
      onClick={() => handleCopied(text)}
      className="rounded-full p-1 transition hover:text-teal-500 dark:hover:text-secondary/50"
    >
      {copied ? (
        <ClipboardDocumentCheckIcon fillRule="evenodd" className="h-5 w-5 lg:h-6 lg:w-6" />
      ) : (
        <ClipboardIcon className="h-5 w-5 lg:h-6 lg:w-6" />
      )}
    </button>
  )
}
