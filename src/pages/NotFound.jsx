import { Link } from 'react-router-dom'

import MainLayout from '@layouts/MainLayout'

export default function NotFound() {
  return (
    <MainLayout>
      <div className="h-[calc(100vh-2rem)] flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold tracking-tighter">
          Página não encontrada. 😿
        </h1>
        <Link className="text-purple-600 hover:underline" to="/dashboard">
          Voltar para a Dashboard
        </Link>
      </div>
    </MainLayout>
  )
}
