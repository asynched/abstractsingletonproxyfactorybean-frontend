import TheSidebarItem from '@components/TheSidebarItem'

import {
  BookmarkAltIcon,
  CalendarIcon,
  ClipboardListIcon,
  LogoutIcon,
} from '@heroicons/react/outline'
import { ViewGridIcon } from '@heroicons/react/solid'
import { clearTokenFromLocalStorage } from '@lib/local-storage'

/**
 * @returns A sidebar element for the pages that follow the dashboard layout
 */
export default function TheSidebar() {
  const sidebarElements = [
    {
      icon: ViewGridIcon,
      tooltip: 'Dashboard',
      special: true,
      url: '/dashboard',
    },
    {
      special: false,
      icon: BookmarkAltIcon,
      tooltip: 'Materiais',
      url: '/resources',
    },
    {
      special: false,
      icon: CalendarIcon,
      tooltip: 'Horários',
      url: '/schedule',
    },
    {
      special: false,
      icon: ClipboardListIcon,
      tooltip: 'Atividades',
      url: '/tasks',
    },
  ]

  return (
    <nav className="absolute h-16 w-full bottom-0 z-50 flex items-center bg-gray-900 md:static md:h-screen md:w-16 md:flex-col">
      {sidebarElements.map(element => (
        <TheSidebarItem
          key={element.tooltip}
          icon={<element.icon className="w-8 h-8" />}
          tooltip={element.tooltip}
          special={element.special}
          url={element.url}
        />
      ))}
      <TheSidebarItem
        className={'ml-auto md:mt-auto'}
        icon={<LogoutIcon className="w-8 h-8" />}
        tooltip={'Sair'}
        special={false}
        callback={clearTokenFromLocalStorage}
        url="/"
      />
    </nav>
  )
}
