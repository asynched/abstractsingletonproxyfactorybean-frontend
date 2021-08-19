import { motion } from 'framer-motion'

/**
 *
 * @param {FormInputFieldProps} props
 * @returns
 */
export default function FormInputField({
  label,
  value,
  placeholder,
  changeHandler,
  delay = 150,
  type = 'text',
}) {
  const formAnimation = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <motion.div
      initial={formAnimation.initial}
      animate={formAnimation.animate}
      transition={{ delay: delay / 1000 }}
      className="flex flex-col"
    >
      <label className="mb-2 text-lg font-semibold" htmlFor={label}>
        {label}
      </label>
      <input
        id={label}
        type={type}
        className="py-2 px-4 border rounded outline-none transition focus:border-transparent focus:ring-2 focus:ring-purple-600"
        placeholder={placeholder}
        value={value}
        onChange={e => changeHandler(e.target.value)}
      />
    </motion.div>
  )
}

/**
 * @typedef FormInputFieldProps
 *
 * @property {string} label
 * @property {string | number} value
 * @property {string} placeholder
 * @property {(value: string) => void} changeHandler
 * @property {number} delay
 * @property {string} type
 */
