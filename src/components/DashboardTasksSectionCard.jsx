import { formatDate } from '@helpers/dates'
import '@utils/types'

/**
 *
 * @param {DashboardTasksSectionCardType} props
 * @returns
 */
export default function DashboardTasksSectionCard({ task }) {
  return (
    <div className="p-4 flex gap-4 rounded-lg border" key={task.id}>
      <img
        src={task.teacher.imageUrl}
        alt={task.teacher.name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div className="flex-1">
        <h2 className="text-2xl font-bold tracking-tighter">{task.title}</h2>
        <h3 className="text-lg font-semibold">{task.teacher.name}</h3>
        <p className="mb-2">Data de entrega: {formatDate(task.dueDate)}</p>
        <div className="grid grid-cols-2 gap-2">
          <a
            href={task.attachments}
            target="_blank"
            className="py-2 text-sm block text-center text-purple-600 font-semibold border border-purple-600 transition rounded hover:bg-purple-600 hover:text-white hover:border-transparent"
          >
            Anexos
          </a>
          <a
            href={`/tasks/${task.id}`}
            target="_blank"
            className="py-2 text-sm block text-center bg-purple-600 text-white font-semibold rounded"
          >
            Ver mais
          </a>
        </div>
      </div>
    </div>
  )
}

/**
 * @typedef DashboardTasksSectionCardType
 *
 * @property {TaskType} task
 */
