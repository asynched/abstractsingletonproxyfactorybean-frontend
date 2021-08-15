export default function DashboardClassesSectionCard({ classItem }) {
  return (
    <a
      href={classItem.url}
      target="_blank"
      key={classItem.id}
      className="py-2 px-4 border rounded transition transform duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <h2 className="text-2xl font-bold tracking-tighter">{classItem.name}</h2>
      <p className="mb-2">
        <span className="font-semibold">Horário:</span> {classItem.schedule}
      </p>
      <div className="flex items-center gap-2">
        <img
          className="w-6 h-6 rounded-full"
          src={classItem.teacher.imageUrl}
          alt={classItem.teacher.name}
        />
        <p>{classItem.teacher.name}</p>
      </div>
    </a>
  )
}
