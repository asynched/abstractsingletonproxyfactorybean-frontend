import { useContext } from 'react'
import { AuthContext } from '@contexts/AuthContext'
import MainLayout from '@layouts/MainLayout'
import DashboardHeading from '@components/DashboardHeading'
import DashboardTasksSection from '@components/DashboardTasksSection'
import DashboardClassesSection from '@components/DashboardClassesSection'
import DashboardDiscordBanner from '@components/DashboardDiscordBanner'
import DashboardNoticeSection from '@components/DashboardNoticeSection'

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
        imageUrl:
          'https://scontent-gru1-2.xx.fbcdn.net/v/t1.18169-9/599576_459283684139757_2071092628_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=XwcrdTI2tAoAX-Vevsx&_nc_ht=scontent-gru1-2.xx&oh=532ea05c57382a2987b8b279d7e07ed0&oe=613D0D3D',
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
        imageUrl:
          'https://i1.rgstatic.net/ii/profile.image/740697980301319-1553607568796_Q128/Gerson-Oliveira.jpg',
      },
    },
    {
      id: 3,
      title: 'Atividades Práticas Supervisionadas',
      description:
        'Atividades práticas supervisionadas do 4° semestre: Implementação de uma aplicação de pqp que negócio chatokkk',
      attachments: 'https://youtube.com/',
      dueDate: '23/11/2021',
      teacher: {
        name: 'Gerson Pastre',
        profileUrl: '/666',
        imageUrl:
          'https://i1.rgstatic.net/ii/profile.image/740697980301319-1553607568796_Q128/Gerson-Oliveira.jpg',
      },
    },
    {
      id: 4,
      title: 'Lista de Banco de Dados',
      description: 'Lista de banco de dados sobre PL-SQL e suas aplicações',
      attachments: 'https://google.com',
      dueDate: '15/08/2021',
      teacher: {
        name: 'Télvio Orrú',
        profileUrl: '/333',
        imageUrl:
          'https://igormiranda.com.br/wp-content/uploads/2021/07/joey-jordison-slipknot.jpg',
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
    <MainLayout>
      <DashboardHeading name={state.user.name} />
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <DashboardTasksSection tasks={tasks} />
        <section className="md:col-span-4">
          <DashboardClassesSection classes={classes} />
          {/* Avisos */}
          <DashboardNoticeSection />
          {/* Discord */}
          <DashboardDiscordBanner />
          {/* Add another section, maybe? */}
          <div className="mt-8 grid grid-cols-2 gap-4"></div>
        </section>
      </div>
    </MainLayout>
  )
}
