import DashboardLessonsSectionCard from './DashboardLessonsSectionCard'

export default function DashboardLessonsSection({ lessons }) {
  return (
    <div>
      <h1 className="mb-4 text-4xl tracking-tighter font-bold">Aulas hoje</h1>
      {lessons.length > 0 ? (
        <div className="mb-8 grid lg:grid-cols-2 gap-4">
          {lessons.map(lesson => (
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
