import { useEffect, useState } from 'react'
import { getRandomArrayElement } from '@helpers/arrays'
import { getCurrentLocaleTimeString } from '@helpers/dates'

const WELCOME_MESSAGES = ['Hello', 'Hallo', 'Olá', 'Bonjour', 'Привет']

/**
 *
 * @param {DashboardHeadingProps} props
 * @returns A heading element for the dashboard page
 */
export default function DashboardHeading({ name }) {
  const [greetingMessage] = useState(getRandomArrayElement(WELCOME_MESSAGES))
  const [currentTime, setCurrentTime] = useState(getCurrentLocaleTimeString())

  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentTime(getCurrentLocaleTimeString())
    }, 1000)

    return () => clearInterval(interval)
  }, [currentTime])

  return (
    <div className="mb-8">
      <h1 className="text-4xl tracking-tighter">
        {greetingMessage}, <span className="font-bold">{name}!</span> 👋
      </h1>
      <p>{currentTime}</p>
    </div>
  )
}

/**
 * @typedef DashboardHeadingProps
 *
 * @property {string} name User's name
 */
