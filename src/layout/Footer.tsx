import React from 'react'
import { socials } from '../utils'

type Props = {
  siteTitle: string
}

const Footer = ({ siteTitle }: Props) => {
  return (
    <footer className="z-10 flex items-center justify-between p-2 text-xs text-gray-500 opacity-80 dark:text-gray-300 md:p-3 md:text-sm">
      <span className="text-gray-700 dark:text-gray-300 sm:text-center">© 2022 {siteTitle}™</span>
      <div className="flex space-x-1 sm:justify-center md:mt-0 md:space-x-2">
        {socials
          .filter(social => social.shown)
          .map((social, socialIdx) => (
            <a
              target="_blank"
              href={social.url}
              key={`social-${socialIdx}`}
              aria-labelledby={social.label}
              className={`transition ${social.label}`}
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox={social.viewBox ? social.viewBox : '0 0 24 24'}
                aria-hidden="true"
              >
                {social.svg.map((d, dIdx) => (
                  <path fillRule="evenodd" d={d} clipRule="evenodd" key={`social-${socialIdx}-svg-${dIdx}`} />
                ))}
              </svg>
            </a>
          ))}
      </div>
    </footer>
  )
}

export default Footer
