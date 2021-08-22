export default function DashboardLessonsSectionCard({ lesson }) {
  return (
    <a
      href={lesson.url}
      target="_blank"
      key={lesson.id}
      className="group pt-3 pb-4 px-6 border rounded-lg transition hover:bg-purple-500 hover:text-white"
    >
      <h2 className="text-2xl font-bold tracking-tighter">
        {lesson.subject.name}
      </h2>
      <p className="mb-2">
        <span className="font-semibold">Horário:</span> {lesson.schedule}
      </p>
      <div className="flex items-center gap-2">
        <img
          className="w-6 h-6 rounded-full transition transform group-hover:border-2 group-hover:border-white group-hover:scale-125"
          src={lesson.subject.teacher.imageUrl}
          alt={lesson.subject.teacher.name}
        />
        <p>{lesson.subject.teacher.name}</p>
      </div>
    </a>
  )
}
