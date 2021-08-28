import useGraphQuery from '@hooks/useGraphQuery'
import useToastError from '@hooks/useToastError'
import { GET_COURSE_STATUS_QUERY } from '@services/graphql/queries'
import { useEffect, useState } from 'react'
import DashboardStatusSectionCard from './DashboardStatusSectionCard'

export default function DashboardStatusSection() {
  const [statuses, setStatuses] = useState([])
  const [statusesData, statusesError] = useGraphQuery(
    GET_COURSE_STATUS_QUERY,
    'courseStatus',
  )

  useEffect(() => {
    if (statusesData) {
      const sanitizedStatuses = [
        {
          emoji: '📑',
          color: 'purple',
          key: 'Atividades',
          value: statusesData.tasks,
        },
        {
          emoji: '🔔',
          color: 'blue',
          key: 'Avisos',
          value: statusesData.notices,
        },
        {
          emoji: '📖',
          color: 'indigo',
          key: 'Materiais',
          value: statusesData.resources,
        },
      ]

      setStatuses(sanitizedStatuses)
    }
  }, [statusesData])

  useToastError(statusesError, 'Erro ao buscar informações do curso')

  return (
    <div className="mb-8">
      <h2 className="mb-4 text-4xl font-bold tracking-tighter">Status</h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
        {statuses.map(status => (
          <DashboardStatusSectionCard key={status.key} status={status} />
        ))}
      </div>
    </div>
  )
}
