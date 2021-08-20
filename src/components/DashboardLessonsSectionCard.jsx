export default function DashboardLessonsSectionCard({ lesson }) {
  return (
    <a
      href={lesson.url}
      target="_blank"
      key={lesson.id}
      className="py-2 px-4 border rounded transition transform duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <h2 className="text-2xl font-bold tracking-tighter">
        {lesson.subject.name}
      </h2>
      <p className="mb-2">
        <span className="font-semibold">Horário:</span> {lesson.schedule}
      </p>
      <div className="flex items-center gap-2">
        <img
          className="w-6 h-6 rounded-full"
          src={lesson.subject.teacher.imageUrl}
          alt={lesson.subject.teacher.name}
        />
        <p>{lesson.subject.teacher.name}</p>
      </div>
    </a>
  )
}
