import { Fragment } from 'react'
import { useParams } from 'react-router-dom'

import useGraphQuery from '@hooks/useGraphQuery'
import { GET_TASK_QUERY } from '@services/graphql/queries'

import MainLayout from '@layouts/MainLayout'
import TaskBanner from '@components/TaskBanner'
import TaskContentSection from '@components/TaskContentSection'
import LoadingContainer from '@components/LoadingContainer'

export default function Tasks() {
  const params = useParams()
  const [taskData, taskError] = useGraphQuery(GET_TASK_QUERY, 'task', {
    uuid: params.id,
  })

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
