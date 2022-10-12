import React from 'react'
import { classNames } from '../../utils'

const Mural = () => {
  const cards = [
    {
      title: 'Information',
      image:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
    },
    {
      title: 'Something else',
      image:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
    },
    {
      title: 'Another one',
      image:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
    },
  ]

  return (
    <div className="h-full w-full">
      {cards.map((card, cardIdx) => {
        let id = card.title.toLowerCase()
        let odd = cardIdx % 2 === 1
        return (
          <div id={id} className="flex flex-col p-4 md:p-16">
            <h2 className="mb-4 text-3xl font-bold tracking-wider">
              <a className="transition hover:underline hover:opacity-80" href={`#${id}`}>
                {card.title}
              </a>
            </h2>
            <div className="flex h-full w-full flex-col rounded-xl md:flex-row">
              <img
                className={classNames(
                  'h-32 w-full rounded-t-xl object-cover md:h-[36rem] md:w-1/2 md:rounded-none',
                  odd ? 'order-1 md:order-2 md:rounded-r-xl' : 'order-1 md:order-1 md:rounded-l-xl'
                )}
                src={card.image}
                alt={`mural #${cardIdx}`}
              />
              <div
                className={classNames(
                  'h-64 w-full rounded-b-xl bg-white p-2 md:h-[36rem] md:w-1/2 md:rounded-none',
                  odd ? 'order-2 md:order-1 md:rounded-l-xl' : 'order-2 md:order-2 md:rounded-r-xl'
                )}
              ></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Mural
