import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { getTokenFromLocalStorage } from '@lib/local-storage'

const makeAuthorizationHeaders = token => {
  if (!token) return {}

  return {
    Authorization: `JWT ${token}`,
  }
}

const httpLink = createHttpLink({
  uri: 'http://localhost:8000/graphql/',
})

const authLink = setContext(() => {
  const token = getTokenFromLocalStorage()
  // return the headers to the context so httpLink can read them
  return {
    headers: makeAuthorizationHeaders(token),
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default client
