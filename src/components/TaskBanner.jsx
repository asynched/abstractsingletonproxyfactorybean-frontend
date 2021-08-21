export default function TaskBanner({ task }) {
  return (
    <section className="mb-8 w-full py-32 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg shadow-xl">
      <h1 className="text-center text-4xl font-bold text-white tracking-tighter">
        {task.title}
      </h1>
    </section>
  )
}
