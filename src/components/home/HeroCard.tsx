import React from 'react'
import classNames from 'classnames'
import { Card } from '../../@types'

type Props = {
  id: string
  odd: boolean
  card: Card
  cardIdx: number
}

const HeroCard = ({ id, odd, card, cardIdx }: Props) => {
  return (
    <div id={id} className="flex flex-col p-4 md:p-16">
      <h2 className="mb-2 text-2xl font-bold md:mb-4 md:text-3xl md:tracking-wider">
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
            'h-64 w-full rounded-b-xl bg-white dark:bg-dark md:h-[36rem] md:w-1/2 md:rounded-none',
            odd ? 'order-2 md:order-1 md:rounded-l-xl' : 'order-2 md:order-2 md:rounded-r-xl'
          )}
        >
          {card.content}
        </div>
      </div>
    </div>
  )
}

export default HeroCard
