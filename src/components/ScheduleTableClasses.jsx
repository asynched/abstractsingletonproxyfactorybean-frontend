import { Fragment } from 'react'
import ScheduleTableClassesLoading from './ScheduleTableClassesLoading'
import ScheduleTableClassesRow from './ScheduleTableClassesRow'

export default function ScheduleTableClasses({ lessons }) {
  return (
    <div className="overflow-auto">
      <table className="w-full overflow-hidden rounded-lg">
        <thead>
          <tr className="text-left text-white bg-gradient-to-r from-purple-600 to-indigo-600">
            <th className="py-2 px-4 font-semibold">Horário / Dia</th>
            <th className="py-2 px-4 font-semibold">Segunda-Feira</th>
            <th className="py-2 px-4 font-semibold">Terça-Feira</th>
            <th className="py-2 px-4 font-semibold">Quarta-Feira</th>
            <th className="py-2 px-4 font-semibold">Quinta-Feira</th>
            <th className="py-2 px-4 font-semibold">Sexta-Feira</th>
          </tr>
        </thead>
        <tbody>
          {lessons ? (
            <Fragment>
              <ScheduleTableClassesRow
                schedule="19:10 - 20:25"
                lessons={lessons}
              />
              <ScheduleTableClassesRow
                schedule="20:45 - 22:00"
                lessons={lessons}
              />
            </Fragment>
          ) : (
            <ScheduleTableClassesLoading />
          )}
        </tbody>
      </table>
    </div>
  )
}
