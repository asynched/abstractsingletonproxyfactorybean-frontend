export default function ScheduleTableClassesColumn({ lesson }) {
  return (
    <td className="py-2 px-4">
      <a className="text-purple-600 hover:underline" href={lesson.url}>
        {lesson.subject.name}
      </a>
    </td>
  )
}
