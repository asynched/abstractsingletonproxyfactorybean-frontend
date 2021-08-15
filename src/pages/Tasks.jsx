import MainLayout from '@layouts/MainLayout'

export default function Tasks() {
  const task = {
    id: 1,
    title: 'Seminário de programação orientada a objetos',
    description:
      'Seminário de Java explicando como a orientação a objetos ajuda no desenvolvimento de uma grande aplicação. O seminário deve ser desenvolvido em power-point (ou, se possível, em vídeo) e enviado para avaliação até 20/09/2021.',
    attachments: 'https://google.com',
    dueDate: '20/09/2021',
    teacher: {
      name: 'Nathan Cirillo',
      profileUrl: '/123',
      imageUrl:
        'https://scontent-gru1-2.xx.fbcdn.net/v/t1.18169-9/599576_459283684139757_2071092628_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=XwcrdTI2tAoAX-Vevsx&_nc_ht=scontent-gru1-2.xx&oh=532ea05c57382a2987b8b279d7e07ed0&oe=613D0D3D',
      about:
        'Formado em Análise e Desenvolvimento de Sistemas e mestre em Ciência da Computação, Graduado pela USP e UNICAMP.',
      email: 'nathancirillo@unip.docente.br',
    },
  }

  return (
    <MainLayout>
      <section className="mb-8 w-full py-32 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg shadow-xl">
        <h1 className="text-center text-4xl font-bold text-white tracking-tighter">
          {task.title}
        </h1>
      </section>
      <section className="px-8 grid grid-cols-4 gap-4">
        <div className="pr-4 col-span-3 border-r">
          <div className="mb-4">
            <h1 className="mb-4 text-4xl font-bold tracking-tighter">Tarefa</h1>
            <p className="text-xl">{task.description}</p>
          </div>
          <hr />
          <div className="my-4">
            <h1 className="mb-4 text-4xl font-bold tracking-tighter">
              Data máxima
            </h1>
            <p className="text-xl">{task.dueDate}</p>
          </div>
          <hr />
          <div className="my-4">
            <h1 className="mb-4 text-4xl font-bold tracking-tighter">Anexos</h1>
            <a
              className="py-2 px-4 text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded shadow-lg"
              href={task.attachments}
            >
              Acesse por aqui
            </a>
          </div>
        </div>
        <div className="col-span-1">
          <div className="mb-4 flex items-center gap-4">
            <img
              src={task.teacher.imageUrl}
              alt={task.teacher.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <h1 className="text-4xl font-bold tracking-tighter">Professor</h1>
              <h2 className="text-2xl tracking-tighter">{task.teacher.name}</h2>
            </div>
          </div>
          <hr />
          <div className="my-4">
            <h2 className="mb-2 text-3xl font-bold tracking-tighter">Sobre</h2>
            <p className="text-lg">{task.teacher.about}</p>
          </div>
          <hr />
          <div className="my-4">
            <h2 className="mb-2 text-3xl font-bold tracking-tighter">E-mail</h2>
            <a
              href={`mailto:${task.teacher.email}`}
              className="text-lg text-purple-600 hover:underline"
            >
              {task.teacher.email}
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
