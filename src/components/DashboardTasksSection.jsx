import DashboardTasksSectionCard from './DashboardTasksSectionCard'
import '@utils/types'

/**
 *
 * @param {DashboardTasksSectionType} props
 * @returns
 */
export default function DashboardTasksSection({ tasks }) {
  return (
    <section className="md:col-span-2 md:border-r">
      <h1 className="mb-4 text-4xl tracking-tighter font-bold">Atividades</h1>
      <div className="mb-2 md:mr-4 grid gap-4">
        {tasks.map((task, index) => (
          <DashboardTasksSectionCard
            delay={index * 100}
            task={task}
            key={task.id}
          />
        ))}
      </div>
    </section>
  )
}

/**
 * @typedef DashboardTasksSectionType
 *
 * @property {TaskType[]} tasks
 */
