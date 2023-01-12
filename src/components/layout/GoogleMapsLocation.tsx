import React from 'react'
import { useMediaQuery } from 'usehooks-ts'
import classNames from 'classnames'

type Props = {
  width?: number
  height?: number
}

export default function GoogleMapsLocation({ width, height }: Props) {
  return (
    <div className="rounded">
      <iframe
        width={width || '600'}
        height={height || '450'}
        style={{ border: 0, borderRadius: 'inherit' }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.7007400775024!2d-8.583442284230317!3d41.05367297929622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd247bf225c0e79b%3A0x396694dd5577473e!2sGuerner%20%26%20Irm%C3%A3os%2C%20S.A!5e0!3m2!1spt-PT!2spt!4v1673486536251!5m2!1spt-PT!2spt"
      ></iframe>
    </div>
  )
}
