import '@utils/types'
import { motion } from 'framer-motion'

/**
 *
 * @param {DashboardTasksSectionCardType} props
 * @returns
 */
export default function DashboardTasksSectionCard({ task, delay }) {
  const parseDate = date => date.split('-').reverse().join('/')

  const animation = {
    initial: {
      opacity: 0,
      y: 64,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <motion.div
      initial={animation.initial}
      animate={animation.animate}
      transition={{ delay: delay / 1000, type: 'tween' }}
      className="py-2 px-4 flex flex-col gap-2 border rounded-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
      key={task.id}
    >
      <a
        className="text-2xl font-bold tracking-tighter transition-all hover:text-purple-600"
        href={`/tasks/${task.id}`}
      >
        {task.title}
      </a>
      {/* <p>{task.description}</p> */}
      <p>
        <span className="font-semibold">Data de entrega:</span>{' '}
        {parseDate(task.dueDate)}
      </p>
      <div className="flex items-center gap-2">
        <img
          src={task.teacher.imageUrl}
          alt={task.teacher.name}
          className="w-6 h-6 object-cover rounded-full"
        />
        <a
          className="text-purple-600 hover:underline"
          href={`teachers/${task.teacher.id}`}
        >
          {task.teacher.name}
        </a>
      </div>
      <a
        className="py-1 px-2 text-sm text-center text-white bg-gradient-to-r from-purple-500 to-indigo-500 border rounded transition duration-300 transform filter hover:brightness-110"
        href={task.attachments}
        target="_blank"
        role="button"
      >
        Anexos
      </a>
    </motion.div>
  )
}

/**
 * @typedef DashboardTasksSectionCardType
 *
 * @property {TaskType} task
 */
