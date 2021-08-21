import { Link } from 'react-router-dom'
import DashboardSidebarItemTooltip from './DashboardSidebarItemTooltip'

/**
 *
 * @param {DashboardSidebarItemProps} props
 * @returns
 */
export default function DashboardSidebarItem({
  icon,
  tooltip,
  className,
  special,
  url,
  callback,
}) {
  return (
    <Link
      to={url}
      className={`${
        className ? className : ''
      } group w-16 h-16 relative flex items-center justify-center text-white ${
        special ? `bg-gradient-to-r from-purple-500 to-indigo-500` : ''
      }`}
      onClick={() => callback && callback()}
    >
      {icon}
      <DashboardSidebarItemTooltip text={tooltip} />
    </Link>
  )
}

/**
 * @typedef DashboardSidebarItemProps
 *
 * @property {JSX.Element} icon Item icon
 * @property {string} tooltip Item tooltip text
 * @property {string} [className] Adicional item classes
 * @property {boolean} [special] Boolean value indicating if the item should be rendered in a different color
 * @property {string} url URL to redirect the user to
 */
