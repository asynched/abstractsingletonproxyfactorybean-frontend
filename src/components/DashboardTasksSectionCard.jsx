import '@utils/types'

/**
 *
 * @param {DashboardTasksSectionCardType} props
 * @returns
 */
export default function DashboardTasksSectionCard({ task }) {
  return (
    <div
      className="py-2 px-4 flex flex-col gap-2 border rounded-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
      key={task.id}
    >
      <h2 className="text-2xl font-bold tracking-tighter">{task.title}</h2>
      {/* <p>{task.description}</p> */}
      <p>
        <span className="font-semibold">Data de entrega:</span> {task.dueDate}
      </p>
      <div className="flex items-center gap-2">
        <img
          src={task.teacher.imageUrl}
          alt={task.teacher.name}
          className="w-6 h-6 object-cover rounded-full"
        />
        <a
          className="text-purple-600 hover:underline"
          href={task.teacher.profileUrl}
        >
          {task.teacher.name}
        </a>
      </div>
      <a
        className="py-1 px-2 text-sm text-center text-white bg-gradient-to-r from-purple-500 to-indigo-500 border rounded transition duration-300 transform filter hover:brightness-110 hover:-translate-y-1"
        href={task.attachments}
        target="_blank"
        role="button"
      >
        Anexos
      </a>
    </div>
  )
}

/**
 * @typedef DashboardTasksSectionCardType
 *
 * @property {TaskType} task
 */
