import React from 'react'
import { LinkFill } from '../components/utils'
import Seo from '../components/layout/Seo'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center bg-primary/10">
      <Seo title="404" />
      <main className="mx-auto flex flex-col items-center justify-center gap-y-4 rounded bg-primary/90 px-16 py-16 text-center dark:bg-primary/50">
        <h1 className="font-lexend text-4xl font-extrabold tracking-tight text-white">
          404 | Not Found
        </h1>
        <LinkFill link="/" text="Country roads... take me home!" light />
      </main>
    </div>
  )
}
