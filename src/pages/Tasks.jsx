import { Fragment } from 'react'
import { useParams } from 'react-router-dom'

import { GET_TASK_QUERY } from '@services/graphql/queries'
import useGraphQuery from '@hooks/useGraphQuery'
import useToastError from '@hooks/useToastError'

import MainLayout from '@layouts/MainLayout'
import TaskBanner from '@components/TaskBanner'
import TaskContentSection from '@components/TaskContentSection'
import LoadingContainer from '@components/LoadingContainer'

export default function Tasks() {
  const { id: taskId } = useParams()
  const [taskData, taskError] = useGraphQuery(GET_TASK_QUERY, 'task', {
    uuid: taskId,
  })

  useToastError(taskError, 'Erro ao buscar os dados da tarefa')

  return (
    <MainLayout>
      {taskData ? (
        <Fragment>
          <TaskBanner task={taskData} />
          <TaskContentSection task={taskData} />
        </Fragment>
      ) : (
        <LoadingContainer />
      )}
    </MainLayout>
  )
}
