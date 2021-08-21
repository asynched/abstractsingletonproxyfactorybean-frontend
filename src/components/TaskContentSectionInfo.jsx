export default function TaskContentSectionInfo({ task }) {
  return (
    <div className="pr-4 col-span-3 border-r">
      <div className="mb-4">
        <h1 className="mb-4 text-4xl font-bold tracking-tighter">Tarefa</h1>
        <p className="text-xl">{task.description}</p>
      </div>
      <hr />
      <div className="my-4">
        <h1 className="mb-4 text-4xl font-bold tracking-tighter">
          Data máxima
        </h1>
        <p className="text-xl">{task.dueDate}</p>
      </div>
      <hr />
      <div className="my-4">
        <h1 className="mb-4 text-4xl font-bold tracking-tighter">Anexos</h1>
        <a
          className="py-2 px-4 text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded shadow-lg"
          href={task.attachments}
        >
          Acesse por aqui
        </a>
      </div>
    </div>
  )
}
