import React, { useEffect } from 'react'
import { FAQ } from '../../@types'
import FaqCard from './FaqCard'

const GeneralFAQs = () => {
  const data: FAQ[] = [
    {
      question: <span>Pergunta interessante 1?</span>,
      answer: (
        <div className="space-y-3">
          <p>Resposta curta antes de enumerar coisas:</p>
          <ul className="ml-5 list-disc">
            <li>
              Carrega Porto e <strong>exemplo de texto bold</strong>.
            </li>
            <li>
              Carrega Porto e <span className="underline">exemplo de texto underline</span>.
            </li>
          </ul>
          <p>Texto final para concluir resposta</p>
        </div>
      ),
    },
    {
      question: <span>Pergunta interessante 2?</span>,
      answer: (
        <div className="space-y-3">
          <p>Resposta enorme.</p>
          <ul className="ml-5 list-disc">
            <li>Facto 1.</li>
            <li>Facto 2.</li>
          </ul>
          <p>Mais texto</p>
          <p className="quote">Coisas.</p>
        </div>
      ),
    },
    {
      question: <span>Pergunta interessante 3?</span>,
      answer: (
        <div className="space-y-3">
          <p>Sim, mas...</p>
          <p>Não esquecer que...</p>
        </div>
      ),
    },
  ]

  const id = 'planner'
  const scrollToComponentTop = () => document?.getElementById(id)?.scrollIntoView()

  useEffect(() => {
    if (window.location.href.split('#')[1] === id) scrollToComponentTop()
  }, [])

  return (
    <div id={id} className="mx-auto flex flex-col items-center justify-center gap-6 pt-20">
      <div className="flex flex-col items-center justify-center">
        <button
          onClick={scrollToComponentTop}
          className="relative mb-2 text-center text-3xl font-bold capitalize text-slate-700 transition 
          before:absolute before:-left-8 hover:opacity-80 hover:before:content-['#'] dark:text-white"
        >
          FAQ Geral
        </button>
        <p className="w-full text-lg">
          Nesta secção estão as questão relacionadas com{' '}
          <strong className="text-slate-700 dark:text-white">perguntas genéricas</strong>.
        </p>
      </div>

      <div className="mx-auto flex w-full flex-col gap-8">
        {data.map((faq, faqIdx) => (
          <FaqCard faq={faq} faqIdx={faqIdx} />
        ))}
      </div>
    </div>
  )
}

export default GeneralFAQs
