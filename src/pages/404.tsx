import * as React from 'react'
import { Layout } from '../layout'

const NotFoundPage = () => (
  <Layout location="Oops">
    <div className="mx-auto max-w-3xl text-center">
      <h1 className="text-3xl tracking-tight font-headings">Oops!</h1>
      <p>Parece que não há nada para ver aqui...</p>
    </div>
  </Layout>
)

export default NotFoundPage
