export default function TaskContentSectionInfoResourceCard({ attachment }) {
  return (
    <div class="p-4 border rounded-lg">
      <h1 className="mb-2 text-2xl font-bold tracking-tighter">
        {attachment.name}
      </h1>
      <p className="mb-3">{attachment.description}</p>
      <a
        className="py-1 block text-sm text-white text-center bg-gradient-to-r from-purple-600 to-indigo-600 rounded"
        href={attachment.url}
        target="_blank"
      >
        Ver anexo
      </a>
    </div>
  )
}
