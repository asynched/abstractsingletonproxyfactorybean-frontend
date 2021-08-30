export default function TeacherAboutSection({ teacher }) {
  return (
    <div className="mb-8 px-8 grid grid-cols-2 gap-4">
      <div>
        <h2 className="mb-2 text-3xl font-bold tracking-tighter">Sobre</h2>
        <p className="text-xl">{teacher.about}</p>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="mb-2 text-3xl font-bold tracking-tighter">E-mail</h2>
          <a
            href={`mailto:${teacher.email}`}
            className="text-xl text-purple-600 hover:underline"
          >
            {teacher.email}
          </a>
        </div>
        <div>
          <h2 className="mb-2 text-3xl font-bold tracking-tighter">
            Pasta compartilhada
          </h2>
          {teacher.sharedFolder ? (
            <a
              className="text-xl text-purple-600 hover:underline"
              href={teacher.sharedFolder}
            >
              Link de acesso
            </a>
          ) : (
            <p className="text-xl">
              Este professor não possui pasta compartilhada
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
