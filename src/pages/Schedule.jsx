import useGraphQuery from '@hooks/useGraphQuery'
import { GET_ALL_LESSONS_QUERY } from '@services/graphql/queries'

import MainLayout from '@layouts/MainLayout'
import ScheduleTableLessons from '@components/ScheduleTableLessons'

export default function Schedule() {
  const [lessonsData, lessonsError] = useGraphQuery(
    GET_ALL_LESSONS_QUERY,
    'allLessons',
  )

  return (
    <MainLayout>
      <div className="mb-8 p-24 text-white bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg">
        <h1 className="text-6xl font-bold tracking-tighter">Horários</h1>
        <p>Confira os horários das aulas</p>
      </div>
      <ScheduleTableLessons lessons={lessonsData} />
    </MainLayout>
  )
}
