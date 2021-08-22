import TaskContentSectionInfo from './TaskContentSectionInfo'
import TaskContentSectionTeacher from './TaskContentSectionTeacher'

export default function TaskContentSection({ task }) {
  return (
    <section className="px-8 grid lg:grid-cols-4 gap-4">
      <TaskContentSectionInfo task={task} />
      <TaskContentSectionTeacher teacher={task.teacher} />
    </section>
  )
}
