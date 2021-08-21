import { Link } from 'react-router-dom'
import DashboardNoticeSectionCard from './DashboardNoticeSectionCard'

export default function DashboardNoticeSection({ notices = [] }) {
  if (notices.length === 0)
    return (
      <div className="mb-8">
        <h1 className="mb-4 text-4xl tracking-tighter font-bold">Avisos</h1>
        <div className="p-12 border-2 text-center border-dashed rounded-lg">
          <h1 className="text-2xl text-gray-400">
            Nenhum aviso a ser mostrado! 🖖
          </h1>
        </div>
      </div>
    )

  return (
    <div className="mb-8">
      <h1 className="mb-4 text-4xl tracking-tighter font-bold">Avisos</h1>
      <div>
        {notices.map(notice => (
          <DashboardNoticeSectionCard key={notice.id} notice={notice} />
        ))}
      </div>
    </div>
  )
}
