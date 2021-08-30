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
          <p className="text-xl">{teacher.email}</p>
        </div>
        <div>
          <h2 className="mb-2 text-3xl font-bold tracking-tighter">
            Pasta compartilhada
          </h2>
          <a className="text-xl" href={teacher.sharedFolder}>
            {teacher.sharedFolder
              ? 'Link de acesso'
              : 'Este professor não disponibilizou uma pasta compartilhada'}
          </a>
        </div>
      </div>
    </div>
  )
}
