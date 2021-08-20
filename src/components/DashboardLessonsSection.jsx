import DashboardLessonsSectionCard from './DashboardLessonsSectionCard'

export default function DashboardLessonsSection({ lessons }) {
  return (
    <div>
      <h1 className="mb-4 text-4xl tracking-tighter font-bold">Aulas hoje</h1>
      <div className="mb-8 grid lg:grid-cols-2 gap-4">
        {lessons.map(lesson => (
          <DashboardLessonsSectionCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  )
}
