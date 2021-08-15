import DashboardClassesSectionCard from './DashboardClassesSectionCard'

export default function DashboardClassesSection({ classes }) {
  return (
    <div>
      <h1 className="mb-4 text-4xl tracking-tighter font-bold">Aulas hoje</h1>
      <div className="mb-8 grid lg:grid-cols-2 gap-4">
        {classes.map(classItem => (
          <DashboardClassesSectionCard
            key={classItem.id}
            classItem={classItem}
          />
        ))}
      </div>
    </div>
  )
}
