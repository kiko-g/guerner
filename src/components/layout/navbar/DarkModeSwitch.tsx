import React from 'react'
import classNames from 'classnames'
import useDarkMode from '../../../hooks/useDarkMode'
import { Switch } from '@headlessui/react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

export default function DarkModeSwitch() {
  const [enabled, setEnabled] = useDarkMode()

  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch
          as="button"
          type="button"
          name="dark-mode-switch-button"
          className={classNames('rounded-full', enabled ? 'animate-dark' : 'animate-light')}
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
        >
          {enabled ? (
            <MoonIcon
              className="ease block h-6 w-6 text-blue-400 transition duration-100 hover:text-blue-500 md:h-8 md:w-8"
              aria-hidden="true"
            />
          ) : (
            <SunIcon
              className="ease block h-6 w-6 text-orange-400 transition duration-100 hover:text-orange-500 md:h-8 md:w-8"
              aria-hidden="true"
            />
          )}
        </Switch>
      </div>
    </Switch.Group>
  )
}
