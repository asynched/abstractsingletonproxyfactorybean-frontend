import useGraphQuery from '@hooks/useGraphQuery'
import useToastError from '@hooks/useToastError'
import { GET_TASKS_QUERY } from '@services/graphql/queries'

import DashboardTasksSectionCard from './DashboardTasksSectionCard'
import '@utils/types'
import { Fragment } from 'react'

export default function DashboardTasksSection() {
  const [tasksData, tasksError] = useGraphQuery(GET_TASKS_QUERY, 'allTasks')

  useToastError(tasksError, 'Error ao buscar os dados de tarefas')

  return (
    <div className="mb-8">
      <h1 className="mb-4 text-4xl tracking-tighter font-bold">Atividades</h1>
      <div className="mb-2 grid gap-4">
        {tasksData?.map(task => (
          <DashboardTasksSectionCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  )
}
