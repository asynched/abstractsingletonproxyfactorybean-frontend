import { Link } from 'react-router-dom'

export default function DashboardNoticeSectionCard({ notice }) {
  return (
    <div className="p-4 flex flex-col border rounded-lg" key={notice.id}>
      <h1 className="mb-2 text-3xl font-bold tracking-tighter">
        {notice.title}
      </h1>
      <p className="mb-4 text-gray-700">{notice.text}</p>
      <div className="flex items-center gap-2">
        <img
          className="w-6 h-6 rounded-full object-cover"
          src={notice.teacher.imageUrl}
          alt={notice.teacher.name}
        />
        <Link
          className="text-purple-600 hover:underline"
          to={`teachers/${notice.teacher.id}`}
        >
          {notice.teacher.name}
        </Link>
      </div>
    </div>
  )
}
