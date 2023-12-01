import { ClipboardDocumentIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'
import classNames from 'classnames'

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
      }, 2000)
  }, [copied, setCopied])

  return (
    <button
      onClick={() => handleCopied(text)}
      className={classNames(
        'rounded-full p-1 transition',
        copied ? '' : 'hover:text-primary dark:hover:text-tertiary',
      )}
    >
      {copied ? (
        <CheckCircleIcon className="h-5 w-5 text-teal-600 lg:h-6 lg:w-6" />
      ) : (
        <ClipboardDocumentIcon fillRule="evenodd" className="h-5 w-5 lg:h-6 lg:w-6" />
      )}
    </button>
  )
}
