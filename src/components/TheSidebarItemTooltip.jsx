/**
 *
 * @param {TheSidebarItemTooltipType} props
 */
export default function TheSidebarItemTooltip({ text }) {
  return (
    <div className="z-10 absolute hidden py-1 px-2 w-24 text-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded transform bottom-[4rem] md:bottom-auto md:left-[4.5rem] group-hover:block shadow-xl">
      {text}
    </div>
  )
}

/**
 * @typedef TheSidebarItemTooltipType
 *
 * @property {string} text Tooltip text
 */
