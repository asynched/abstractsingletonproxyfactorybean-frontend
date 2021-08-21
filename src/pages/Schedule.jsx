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
      <h1 className="text-6xl font-bold tracking-tighter">Horários</h1>
      <p className="mb-8 ">Confira os horários das aulas</p>
      <ScheduleTableLessons lessons={lessonsData} />
    </MainLayout>
  )
}
