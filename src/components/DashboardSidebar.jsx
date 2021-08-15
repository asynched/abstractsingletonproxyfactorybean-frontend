import DashboardSidebarItem from '@components/DashboardSidebarItem'

import {
  BookmarkAltIcon,
  CalendarIcon,
  ClipboardListIcon,
  LogoutIcon,
} from '@heroicons/react/outline'
import { ViewGridIcon } from '@heroicons/react/solid'

/**
 * @returns A sidebar element for the pages that follow the dashboard layout
 */
export default function DashboardSidebar() {
  const sidebarElements = [
    {
      icon: ViewGridIcon,
      tooltip: 'Dashboard',
      special: true,
    },
    {
      special: false,
      icon: BookmarkAltIcon,
      tooltip: 'Materiais',
    },
    {
      special: false,
      icon: CalendarIcon,
      tooltip: 'Horários',
    },
    {
      special: false,
      icon: ClipboardListIcon,
      tooltip: 'Atividades',
    },
  ]

  return (
    <nav className="w-16 flex flex-col items-center bg-black">
      {sidebarElements.map(element => (
        <DashboardSidebarItem
          key={element.tooltip}
          icon={<element.icon className="w-8 h-8" />}
          tooltip={element.tooltip}
          special={element.special}
        />
      ))}
      <DashboardSidebarItem
        className={'mt-auto'}
        icon={<LogoutIcon className="w-8 h-8" />}
        tooltip={'Sair'}
      />
    </nav>
  )
}
