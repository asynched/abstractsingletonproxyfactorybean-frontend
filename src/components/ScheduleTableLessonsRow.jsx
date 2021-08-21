import { useMemo } from 'react'
import ScheduleTableLessonsColumn from './ScheduleTableLessonsColumn'

export default function ScheduleTableLessonsRow({ schedule, lessons }) {
  const filteredLessons = useMemo(
    () => lessons.filter(lesson => lesson.schedule === schedule),
    [lessons],
  )

  const getElementByDay = (day, lessons = filteredLessons) =>
    lessons.find(lesson => lesson.weekDay === day)

  return (
    <tr className="border-b">
      <td className="py-2 px-4">{schedule}</td>
      <ScheduleTableLessonsColumn lesson={getElementByDay('SEG')} />
      <ScheduleTableLessonsColumn lesson={getElementByDay('TER')} />
      <ScheduleTableLessonsColumn lesson={getElementByDay('QUA')} />
      <ScheduleTableLessonsColumn lesson={getElementByDay('QUI')} />
      <ScheduleTableLessonsColumn lesson={getElementByDay('SEX')} />
    </tr>
  )
}
