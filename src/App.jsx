import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { injectStyle } from 'react-toastify/dist/inject-style'
import { ApolloProvider } from '@apollo/client'

import AuthContextProvider from '@contexts/AuthContext'
import client from '@services/graphql'

import Routes from '@routes/index'

export default function App() {
  useEffect(injectStyle, [])

  return (
    <AuthContextProvider>
      <ApolloProvider client={client}>
        <Routes />
        <ToastContainer pauseOnHover={false} position="bottom-right" />
      </ApolloProvider>
    </AuthContextProvider>
  )
}
