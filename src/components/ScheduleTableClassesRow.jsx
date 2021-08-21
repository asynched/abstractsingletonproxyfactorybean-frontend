import { useMemo } from 'react'
import ScheduleTableClassesColumn from './ScheduleTableClassesColumn'

export default function ScheduleTableClassesRow({ schedule, lessons }) {
  const filteredLessons = useMemo(
    () => lessons.filter(lesson => lesson.schedule === schedule),
    [lessons],
  )

  const getElementByDay = (day, lessons = filteredLessons) =>
    lessons.find(lesson => lesson.weekDay === day)

  return (
    <tr className="border-b">
      <td className="py-2 px-4">{schedule}</td>
      <ScheduleTableClassesColumn lesson={getElementByDay('SEG')} />
      <ScheduleTableClassesColumn lesson={getElementByDay('TER')} />
      <ScheduleTableClassesColumn lesson={getElementByDay('QUA')} />
      <ScheduleTableClassesColumn lesson={getElementByDay('QUI')} />
      <ScheduleTableClassesColumn lesson={getElementByDay('SEX')} />
    </tr>
  )
}
