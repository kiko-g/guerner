import * as React from 'react'
import { Layout } from '../components/layout'

const NotFoundPage = () => (
  <Layout location="Oops">
    <div className="mx-auto max-w-3xl text-center">
      <h1 className="font-headings text-3xl tracking-tight">Oops!</h1>
      <p>Parece que não há nada para ver aqui...</p>
    </div>
  </Layout>
)

export default NotFoundPage
