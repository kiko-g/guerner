import React from 'react'
import HeroCard from './HeroCard'
import { Card } from '../../@types'

const Mural = () => {
  const cards: Card[] = [
    {
      title: 'Information',
      image:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
      content: (
        <div className="flex flex-col gap-y-1 px-3 py-3 text-sm font-normal md:px-5 md:py-4 md:text-base">
          <p>Algum texto introdutório sobre esta secção. Aqui está uma lista a enumerar factos:</p>
          <ul className="ml-4 list-disc">
            <li>Há imensas vantagens de comer uma maçã por dia.</li>
            <li>O Sol está a 150.000.000km da Terra.</li>
            <li>O FC Porto é o melhor clube de Portugal.</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Something else',
      image:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
      content: (
        <div className="flex flex-col gap-y-1 px-3 py-3 text-sm font-normal md:px-5 md:py-4 md:text-base">
          <p>Algum texto introdutório sobre esta secção. Aqui está uma lista a enumerar factos:</p>
          <ul className="ml-4 list-disc">
            <li>Há imensas vantagens de comer uma maçã por dia.</li>
            <li>O Sol está a 150.000.000km da Terra.</li>
            <li>O FC Porto é o melhor clube de Portugal.</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Another one',
      image:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
      content: (
        <div className="flex flex-col gap-y-1 px-3 py-3 text-sm font-normal md:px-5 md:py-4 md:text-base">
          <p>Algum texto introdutório sobre esta secção. Aqui está uma lista a enumerar factos:</p>
          <ul className="ml-4 list-disc">
            <li>Há imensas vantagens de comer uma maçã por dia.</li>
            <li>O Sol está a 150.000.000km da Terra.</li>
            <li>O FC Porto é o melhor clube de Portugal.</li>
          </ul>
        </div>
      ),
    },
  ]

  return (
    <div className="h-full w-full">
      {cards.map((card, cardIdx) => {
        let id = card.title.replace(/\s/g, '-').toLowerCase()
        let odd = cardIdx % 2 === 1
        return <HeroCard id={id} odd={odd} card={card} cardIdx={cardIdx} />
      })}
    </div>
  )
}

export default Mural
