import React, { useEffect } from 'react'
import { FaqsHeader, GeneralFaqs } from '../components/faqs'
import { Layout } from '../layout'

const FaqsPage = () => {
  useEffect(() => {
    if (!window.location.href.split('#')[1]) document?.getElementById('layout')?.scrollIntoView()
  }, [])

  return (
    <Layout location="FAQs">
      <div className="container mx-auto w-full max-w-7xl space-y-4 py-6 px-4 md:py-10 md:px-6">
        <FaqsHeader />
        <GeneralFaqs />
      </div>
    </Layout>
  )
}
export default FaqsPage
