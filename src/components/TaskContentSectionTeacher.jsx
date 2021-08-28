import { Link } from 'react-router-dom'

export default function TaskContentSectionTeacher({ teacher }) {
  return (
    <div className="col-span-1">
      <div className="mb-4 flex items-center gap-4">
        <img
          src={teacher.imageUrl}
          alt={teacher.name}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h1 className="text-4xl font-bold tracking-tighter">Professor</h1>
          <Link
            to={`/teachers/${teacher.id}`}
            className="text-2xl tracking-tighter text-purple-600 hover:underline"
          >
            {teacher.name}
          </Link>
        </div>
      </div>
      <hr />
      <div className="my-4">
        <h2 className="mb-2 text-3xl font-bold tracking-tighter">Sobre</h2>
        <p className="text-lg">{teacher.about}</p>
      </div>
      <hr />
      <div className="my-4">
        <h2 className="mb-2 text-3xl font-bold tracking-tighter">E-mail</h2>
        <a
          href={`mailto:${teacher.email}`}
          className="text-lg text-purple-600 hover:underline"
        >
          {teacher.email}
        </a>
      </div>
    </div>
  )
}
