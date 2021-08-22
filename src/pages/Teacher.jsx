import { useParams } from 'react-router-dom'
import useGraphQuery from '@hooks/useGraphQuery'
import MainLayout from '@layouts/MainLayout'
import { GET_TEACHER_QUERY } from '@services/graphql/queries'
import { useEffect } from 'react'
import LoadingContainer from '@components/LoadingContainer'

export default function Teacher() {
  const { id: teacherId } = useParams()

  const [teacherData, teacherError] = useGraphQuery(
    GET_TEACHER_QUERY,
    'teacher',
    {
      uuid: teacherId,
    },
  )

  useEffect(() => console.log(teacherData), [teacherData])

  return (
    <MainLayout>
      {teacherData ? (
        <section>
          <div className="p-24 w-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl text-white shadow-xl">
            <h1 className="text-6xl font-bold tracking-tighter">Professores</h1>
            <p>Dados dos professores</p>
          </div>
          <div className="mb-8 -mt-8 px-8 flex gap-2">
            <img
              src={teacherData.imageUrl}
              alt={teacherData.name}
              className="self-end w-32 h-32 rounded-full object-cover border-2 border-white"
            />
            <div className="self-end">
              <h1 className="text-5xl font-bold tracking-tighter">Professor</h1>
              <p className="text-2xl">{teacherData.name}</p>
            </div>
          </div>
          <div className="px-8 grid grid-cols-2 gap-4">
            <div>
              <h2 className="mb-2 text-4xl font-bold tracking-tighter">
                Sobre
              </h2>
              <p className="text-xl">{teacherData.about}</p>
            </div>
            <div></div>
          </div>
        </section>
      ) : (
        <LoadingContainer />
      )}
    </MainLayout>
  )
}
