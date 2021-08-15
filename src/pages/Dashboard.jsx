import { useContext } from 'react'
import { AuthContext } from '@contexts/AuthContext'
import DashboardLayout from '@layouts/DashboardLayout'
import DashboardHeading from '@components/DashboardHeading'
import DashboardTasksSection from '@components/DashboardTasksSection'

export default function Dashboard() {
  const { state } = useContext(AuthContext)

  const tasks = [
    {
      id: 1,
      title: 'Seminário de programação orientada a objetos',
      description:
        'Seminário de Java explicando como a orientação a objetos ajuda no desenvolvimento de uma grande aplicação.',
      attachments: 'https://google.com',
      dueDate: '20/09/2021',
      teacher: {
        name: 'Nathan Cirillo',
        profileUrl: '/123',
      },
    },
    {
      id: 2,
      title: 'Consultas em SQL: Análise de complexidade de espaço',
      description:
        'Pesquisa de complexidade de espaço em memória para consultas Big Data em SQL e NoSQL',
      attachments: null,
      dueDate: '24/10/2021',
      teacher: {
        name: 'Gerson Pastre',
        profileUrl: '/666',
      },
    },
  ]

  return (
    <DashboardLayout>
      <DashboardHeading name={state.user.name} />
      <div className="grid grid-cols-6 gap-4">
        <DashboardTasksSection tasks={tasks} />
        <section className="col-span-4">
          <h1 className="text-4xl tracking-tighter font-bold">Links</h1>
        </section>
      </div>
    </DashboardLayout>
  )
}
