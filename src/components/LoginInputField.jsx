import { motion } from 'framer-motion'

export default function LoginInputField({
  label,
  value,
  placeholder,
  changeHandler,
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
      className="flex flex-col"
    >
      <label className="mb-2 text-lg font-semibold" htmlFor="password">
        {label}
      </label>
      <input
        className="py-2 px-4 border rounded outline-none focus:border-transparent focus:ring-2 focus:ring-purple-600"
        placeholder={placeholder}
        value={value}
        onChange={e => changeHandler(e.target.value)}
      />
    </motion.div>
  )
}
