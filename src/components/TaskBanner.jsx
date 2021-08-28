export default function TaskBanner({ task }) {
  return (
    <section className="mb-8 w-full p-24 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow-xl">
      <h1 className="text-6xl font-bold tracking-tighter">Atividade</h1>
      <h2>{task.title}</h2>
    </section>
  )
}
