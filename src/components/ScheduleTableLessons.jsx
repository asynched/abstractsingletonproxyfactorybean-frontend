import { Fragment } from 'react'
import ScheduleTableLessonsLoading from './ScheduleTableLessonsLoading'
import ScheduleTableLessonsRow from './ScheduleTableLessonsRow'

export default function ScheduleTableLessons({ lessons }) {
  return (
    <div className="relative rounded-lg">
      <table className="relative z-10 w-full bg-gray-100 overflow-hidden rounded-lg shadow-lg">
        <thead>
          <tr className="text-left text-white bg-gradient-to-r from-purple-600 to-indigo-600">
            <th
              colSpan={6}
              className="py-2 px-4 font-bold text-center text-xl tracking-tighter"
            >
              Horários
            </th>
          </tr>
          <tr className="text-left border-b">
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
              <ScheduleTableLessonsRow
                schedule="19:10 - 20:25"
                lessons={lessons}
              />
              <ScheduleTableLessonsRow
                schedule="20:45 - 22:00"
                lessons={lessons}
              />
            </Fragment>
          ) : (
            <ScheduleTableLessonsLoading />
          )}
        </tbody>
      </table>
      <div className="absolute top-0 w-full h-full bg-gradient-to-r from-indigo-600 to-blue-600 transform rotate-1 rounded-lg"></div>
    </div>
  )
}
