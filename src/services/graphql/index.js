import { getTokenFromLocalStorage } from '@lib/local-storage'
import { GraphQLClient } from 'graphql-request'

const makeAuthHeaders = () => {
  const token = getTokenFromLocalStorage()

  if (!token) {
    return {}
  }

  return {
    Authorization: `JWT ${token}`,
  }
}

const client = new GraphQLClient('http://localhost:8000/graphql/', {
  headers: {
    ...makeAuthHeaders(),
  },
})

export const setAuthorizationHeaders = token => {
  client.setHeader('Authorization', `JWT ${token}`)

  console.log(client)
}

export default client
