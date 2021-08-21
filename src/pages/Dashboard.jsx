import { useContext, useEffect } from 'react'

import {
  GET_LESSONS_DATA_QUERY,
  GET_NOTICES_QUERY,
  GET_TASKS_QUERY,
  GET_USER_DATA_QUERY,
} from '@services/graphql/queries'
import { dispatchAction } from '@lib/dispatch'

import useGraphQuery from '@hooks/useGraphQuery'
import useToastError from '@hooks/useToastError'
import { AuthContext } from '@contexts/AuthContext'

import MainLayout from '@layouts/MainLayout'
import DashboardHeading from '@components/DashboardHeading'
import DashboardTasksSection from '@components/DashboardTasksSection'
import DashboardLessonsSection from '@components/DashboardLessonsSection'
import DashboardDiscordBanner from '@components/DashboardDiscordBanner'
import DashboardNoticeSection from '@components/DashboardNoticeSection'

export default function Dashboard() {
  const { dispatch } = useContext(AuthContext)

  const [userData, userError] = useGraphQuery(GET_USER_DATA_QUERY, 'getSelf')
  const [lessonsData, lessonsError] = useGraphQuery(
    GET_LESSONS_DATA_QUERY,
    'lessonByDay',
  )
  const [tasksData, tasksError] = useGraphQuery(GET_TASKS_QUERY, 'allTasks')
  const [noticesData, noticesError] = useGraphQuery(
    GET_NOTICES_QUERY,
    'allNotices',
  )

  useToastError(userError, 'Error ao buscar os dados do perfil')
  useToastError(lessonsError, 'Error ao buscar os dados de aulas')
  useToastError(tasksError, 'Error ao buscar os dados de tarefas')
  useToastError(noticesError, 'Error ao buscar os dados de avisos')

  useEffect(() => {
    if (userData) {
      dispatchAction(dispatch, 'set/user', userData)
    }
  }, [userData])

  return (
    <MainLayout>
      <DashboardHeading />
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <DashboardTasksSection tasks={tasksData || []} />
        <section className="md:col-span-4">
          <DashboardLessonsSection lessons={lessonsData || []} />
          {/* Avisos */}
          <DashboardNoticeSection notices={noticesData || []} />
          {/* Discord */}
          <DashboardDiscordBanner />
          {/* Add another section, maybe? */}
          <div className="mt-8 grid grid-cols-2 gap-4"></div>
        </section>
      </div>
    </MainLayout>
  )
}
