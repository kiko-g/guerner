import React from 'react'
import Seo from '../components/layout/Seo'
import { LinkFill } from '../components/utils'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center bg-primary/90 dark:bg-zinc-900">
      <Seo title="404" />
      <main className="mx-auto flex flex-col items-center justify-center gap-y-4 rounded px-16 py-16 text-center">
        <h1 className="font-lexend text-4xl font-extrabold tracking-tight text-white">404 | Not Found</h1>
        <LinkFill link="/" text="Country roads... take me home!" light />
      </main>
    </div>
  )
}
