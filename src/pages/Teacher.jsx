import { useParams } from 'react-router-dom'
import useGraphQuery from '@hooks/useGraphQuery'
import MainLayout from '@layouts/MainLayout'
import { GET_TEACHER_QUERY } from '@services/graphql/queries'
import { useEffect } from 'react'
import LoadingContainer from '@components/LoadingContainer'
import TeacherBannerSection from '@components/TeacherBannerSection'
import TeacherHeadingInfo from '@components/TeacherHeadingInfo'
import TeacherAboutSection from '@components/TeacherAboutSection'
import TeacherSubjectSection from '@components/TeacherSubjectSection'

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
          <TeacherBannerSection />
          <TeacherHeadingInfo teacher={teacherData} />
          <TeacherAboutSection teacher={teacherData} />
          <TeacherSubjectSection teacher={teacherData} />
        </section>
      ) : (
        <LoadingContainer />
      )}
    </MainLayout>
  )
}
