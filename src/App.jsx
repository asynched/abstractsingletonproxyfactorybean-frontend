import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { injectStyle } from 'react-toastify/dist/inject-style'
import AuthContextProvider from '@contexts/AuthContext'
import Routes from '@routes/index'

export default function App() {
  useEffect(injectStyle, [])

  return (
    <AuthContextProvider>
      <Routes />
      <ToastContainer pauseOnHover={false} position="bottom-right" />
    </AuthContextProvider>
  )
}
