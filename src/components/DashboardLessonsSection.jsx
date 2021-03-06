import useGraphQuery from '@hooks/useGraphQuery'
import useToastError from '@hooks/useToastError'
import { GET_LESSONS_DATA_QUERY } from '@services/graphql/queries'
import { getWeekDayAsShortString } from '@helpers/dates'

import DashboardLessonsSectionCard from './DashboardLessonsSectionCard'

export default function DashboardLessonsSection() {
  const [lessonsData, lessonsError] = useGraphQuery(
    GET_LESSONS_DATA_QUERY,
    'lessonByDay',
    {
      day: getWeekDayAsShortString(),
    },
  )

  useToastError(lessonsError, 'Error ao buscar os dados de aulas')

  return (
    <div>
      <h1 className="mb-4 text-4xl tracking-tighter font-bold">Aulas hoje</h1>
      {lessonsData?.length > 0 ? (
        <div className="mb-8 grid lg:grid-cols-2 gap-4">
          {lessonsData.map(lesson => (
            <DashboardLessonsSectionCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      ) : (
        <div className="mb-8 w-full p-12 border-2 border-dashed rounded-lg transition hover:border-transparent hover:shadow-lg">
          <h1 className="text-gray-400 text-2xl text-center ">
            Sem aulas hoje! 🙌
          </h1>
        </div>
      )}
    </div>
  )
}
