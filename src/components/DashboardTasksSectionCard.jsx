import { formatDate } from '@helpers/dates'
import '@utils/types'

/**
 *
 * @param {DashboardTasksSectionCardType} props
 * @returns
 */
export default function DashboardTasksSectionCard({ task }) {
  return (
    <div
      className="flex md:flex-col lg:flex-row gap-4 rounded-lg border"
      key={task.id}
    >
      <img
        src={task.teacher.imageUrl}
        alt={task.teacher.name}
        className="hidden sm:block md:hidden xl:block w-32 h-full object-cover rounded-l-lg"
      />
      <div className="p-4 flex-1">
        <h2 className="text-2xl font-bold tracking-tighter">{task.title}</h2>
        <h3 className="font-semibold">{task.teacher.name}</h3>
        <p className="mb-2">Data de entrega: {formatDate(task.dueDate)}</p>
        <a
          href={`/tasks/${task.id}`}
          className="py-2 text-sm block text-center bg-purple-600 text-white font-semibold rounded transform transition hover:brightness-75"
        >
          Ver mais
        </a>
      </div>
    </div>
  )
}

/**
 * @typedef DashboardTasksSectionCardType
 *
 * @property {TaskType} task
 */
