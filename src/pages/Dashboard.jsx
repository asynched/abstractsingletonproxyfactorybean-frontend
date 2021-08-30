import { useContext, useEffect } from 'react'

import { GET_USER_DATA_QUERY } from '@services/graphql/queries'
import { dispatchAction } from '@lib/dispatch'

import useGraphQuery from '@hooks/useGraphQuery'
import useToastError from '@hooks/useToastError'
import { AuthContext } from '@contexts/AuthContext'

import MainLayout from '@layouts/MainLayout'
import DashboardHeading from '@components/DashboardHeading'
import DashboardMainContent from '@components/DashboardMainContent'

export default function Dashboard() {
  const { dispatch } = useContext(AuthContext)
  const [userData, userError] = useGraphQuery(GET_USER_DATA_QUERY, 'getSelf')

  useToastError(userError, 'Error ao buscar os dados do perfil')

  useEffect(() => {
    if (userData) {
      dispatchAction(dispatch, 'set/user', userData)
    }
  }, [userData])

  return (
    <MainLayout>
      <DashboardHeading />
      <DashboardMainContent />
    </MainLayout>
  )
}
