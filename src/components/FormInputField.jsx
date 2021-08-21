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
  pattern,
  title,
  required = false,
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
        placeholder={placeholder}
        className="border-gray-300 rounded transition focus:ring-purple-600"
        value={value}
        pattern={pattern}
        title={title}
        required={required}
        onChange={e => changeHandler(e.target.value)}
      />
    </motion.div>
  )
}

/**
 * @typedef FormInputFieldProps
 *
 * @property {string}label
 * @property {string} value
 * @property {string} placeholder
 * @property {(value: string) => void} changeHandler
 * @property {string} pattern
 * @property {string} title
 * @property {boolean?} required
 * @property {number?} delay
 * @property {string?} type
 */
