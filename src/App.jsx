import AuthContextProvider from '@contexts/AuthContext'
import Routes from '@routes/index'

export default function App() {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  )
}
