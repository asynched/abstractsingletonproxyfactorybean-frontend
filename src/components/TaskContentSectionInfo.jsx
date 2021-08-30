import { formatDate } from '@helpers/dates'
import TaskContentSectionInfoResourceCard from './TaskContentSectionInfoResourceCard'
import TaskContentSectionInfoNoAttachmentsCard from './TaskContentSectionInfoNoResourcesCard'

export default function TaskContentSectionInfo({ task }) {
  return (
    <div className="pr-4 col-span-3 lg:border-r">
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="mb-4">
          <h1 className="mb-4 text-4xl font-bold tracking-tighter">Tarefa</h1>
          <p className="text-xl">{task.description}</p>
        </div>
        <div className="my-4">
          <h1 className="mb-4 text-4xl font-bold tracking-tighter">
            Data máxima
          </h1>
          <p className="text-xl">{formatDate(task.dueDate)}</p>
        </div>
      </div>
      <hr />
      <div className="my-4">
        <h1 className="mb-4 text-4xl font-bold tracking-tighter">Anexos</h1>
        <div className="grid grid-cols-2 gap-4">
          {task.resourceSet?.length > 0 ? (
            task.resourceSet.map(attachment => (
              <TaskContentSectionInfoResourceCard
                attachment={attachment}
                key={attachment.id}
              />
            ))
          ) : (
            <TaskContentSectionInfoNoAttachmentsCard />
          )}
        </div>
      </div>
    </div>
  )
}
