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

  const classes = [
    {
      id: 1,
      schedule: '19:10 - 20:45',
      name: 'Programação orientada a objetos',
      url: 'https://zoom.us/',
      teacher: {
        name: 'Peter Jandl',
        imageUrl: 'https://avatars.githubusercontent.com/u/15650767?v=4',
        profileUrl: '/333',
      },
    },
    {
      id: 2,
      schedule: '20:45 - 22:00',
      name: 'Programação orientada a objetos',
      url: 'https://zoom.us/',
      teacher: {
        name: 'Peter Jandl',
        imageUrl: 'https://avatars.githubusercontent.com/u/15650767?v=4',
        profileUrl: '/333',
      },
    },
  ]

  return (
    <DashboardLayout>
      <DashboardHeading name={state.user.name} />
      <div className="grid grid-cols-6 gap-4">
        <DashboardTasksSection tasks={tasks} />
        <section className="col-span-4">
          <div>
            <h1 className="mb-4 text-4xl tracking-tighter font-bold">
              Aulas hoje
            </h1>
            <div className="mb-8 grid grid-cols-2 gap-4">
              {classes.map(cls => (
                <a
                  href={cls.url}
                  target="_blank"
                  key={cls.id}
                  className="py-2 px-4 border rounded transition transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <h2 className="text-2xl font-bold tracking-tighter">
                    {cls.name}
                  </h2>
                  <p className="mb-2">
                    <span className="font-semibold">Horário:</span>{' '}
                    {cls.schedule}
                  </p>
                  <div className="flex items-center gap-2">
                    <img
                      className="w-6 h-6 rounded-full"
                      src={cls.teacher.imageUrl}
                      alt={cls.teacher.name}
                    />
                    <p>{cls.teacher.name}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-4xl tracking-tighter font-bold">Links</h1>
          </div>
        </section>
      </div>
    </DashboardLayout>
  )
}
