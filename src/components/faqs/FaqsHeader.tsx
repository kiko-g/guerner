import React from 'react'

const FAQsHeader = () => {
  const emailAddress = 'email@examplo.com'

  return (
    <div>
      <h2 className="mb-4 text-center text-3xl font-bold capitalize text-primary dark:text-white">
        Perguntas mais frequentes (FAQs)
      </h2>
      <div className="w-full text-center text-lg">
        <p>Aqui estão respostas às dúvidas mais frequentes. </p>
        <p>
          Se persistirem dúvidas que não estão esclarecidas nesta página, por favor contacte{' '}
          <a
            href={`mailto:${emailAddress}`}
            className="text-primary transition-all hover:underline hover:opacity-80 dark:text-secondary"
          >
            {emailAddress}
          </a>
          .
        </p>
      </div>
    </div>
  )
}

export default FAQsHeader
