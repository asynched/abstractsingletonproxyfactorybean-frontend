import { Fragment } from 'react'

import useGraphQuery from '@hooks/useGraphQuery'
import useToastError from '@hooks/useToastError'
import { GET_NOTICES_QUERY } from '@services/graphql/queries'

import DashboardNoticeSectionCard from './DashboardNoticeSectionCard'

export default function DashboardNoticeSection() {
  const [noticesData, noticesError] = useGraphQuery(
    GET_NOTICES_QUERY,
    'allNotices',
  )

  useToastError(noticesError, 'Error ao buscar os dados de avisos')

  return (
    <div className="mb-8">
      {noticesData ? (
        <Fragment>
          <h1 className="mb-4 text-4xl tracking-tighter font-bold">Avisos</h1>
          <div>
            {noticesData.map(notice => (
              <DashboardNoticeSectionCard key={notice.id} notice={notice} />
            ))}
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <h1 className="mb-4 text-4xl tracking-tighter font-bold">Avisos</h1>
          <div className="p-12 border-2 text-center border-dashed rounded-lg">
            <h1 className="text-2xl text-gray-400">
              Nenhum aviso a ser mostrado! 🖖
            </h1>
          </div>
        </Fragment>
      )}
    </div>
  )
}
