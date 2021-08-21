import { useContext, useEffect } from 'react'
import useSWR from 'swr'

import useFailedRequestState from '@hooks/useFailedRequestState'
import { AuthContext } from '@contexts/AuthContext'
import {
  getLessonsData,
  getNoticesData,
  getTasksData,
  getUserData,
} from '@services/graphql/queries'
import { dispatchAction } from '@lib/dispatch'

import MainLayout from '@layouts/MainLayout'
import DashboardHeading from '@components/DashboardHeading'
import DashboardTasksSection from '@components/DashboardTasksSection'
import DashboardLessonsSection from '@components/DashboardLessonsSection'
import DashboardDiscordBanner from '@components/DashboardDiscordBanner'
import DashboardNoticeSection from '@components/DashboardNoticeSection'

export default function Dashboard() {
  const { dispatch } = useContext(AuthContext)

  useSWR('user', async () => {
    const data = await getUserData()
    dispatchAction(dispatch, 'set/user', data.getSelf)
  })

  const { data: lessonsData, error: lessonsError } = useSWR(
    'lessons',
    getLessonsData,
  )

  const { data: tasksData, error: tasksError } = useSWR('tasks', getTasksData)

  const { data: noticesData, error: noticesError } = useSWR(
    'notices',
    getNoticesData,
  )

  useFailedRequestState(lessonsError, 'Error ao buscar os dados de aulas')
  useFailedRequestState(tasksError, 'Error ao buscar os dados de tarefas')
  useFailedRequestState(noticesError, 'Error ao buscar os dados de avisos')

  useEffect(() => {
    console.log(noticesData)
  }, [noticesData])

  return (
    <MainLayout>
      <DashboardHeading />
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <DashboardTasksSection tasks={tasksData || []} />
        <section className="md:col-span-4">
          <DashboardLessonsSection lessons={lessonsData || []} />
          {/* Avisos */}
          <DashboardNoticeSection />
          {/* Discord */}
          <DashboardDiscordBanner />
          {/* Add another section, maybe? */}
          <div className="mt-8 grid grid-cols-2 gap-4"></div>
        </section>
      </div>
    </MainLayout>
  )
}
