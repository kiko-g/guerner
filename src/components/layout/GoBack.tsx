import React from 'react'
import { Link } from 'gatsby'
import { ArrowSmallLeftIcon } from '@heroicons/react/24/outline'

export default function GoBack() {
  return (
    <Link
      to="/produtos/agricultura"
      className="flex items-center justify-center gap-x-1 
      text-primary transition hover:opacity-80 dark:text-secondary"
    >
      <ArrowSmallLeftIcon className="h-5 w-5" />
      <span>Voltar</span>
    </Link>
  )
}
