import DashboardStatusSectionCard from './DashboardStatusSectionCard'

export default function DashboardStatusSection() {
  const status = [
    {
      emoji: '📑',
      color: 'purple',
      key: 'Atividades',
      value: 4,
    },
    {
      emoji: '🔔',
      color: 'blue',
      key: 'Avisos',
      value: 1,
    },
    {
      emoji: '📖',
      color: 'indigo',
      key: 'Materiais',
      value: 12,
    },
  ]

  return (
    <div className="mb-8">
      <h2 className="mb-4 text-4xl font-bold tracking-tighter">Status</h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
        {status.map(item => (
          <DashboardStatusSectionCard key={item.key} status={item} />
        ))}
      </div>
    </div>
  )
}
