import React from 'react'

export default function DashboardStatusCard({ status }) {
  return (
    <div
      className={`relative py-4 px-6 text-white bg-gradient-to-br from-${status.color}-500 to-${status.color}-600 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1`}
    >
      <div className="absolute top-4 right-[1.5rem] mb-2 w-8 h-8 grid place-items-center bg-white bg-opacity-50 rounded">
        {status.emoji}
      </div>
      <div>
        <h2 className="text-5xl font-thin tracking-tighter">{status.value}</h2>
        <p className="text-xl">{status.key}</p>
      </div>
    </div>
  )
}
