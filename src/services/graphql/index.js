import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient('http://localhost:8000/graphql/')

export const setAuthorizationHeaders = token => {
  client.setHeader('Authorization', `JWT ${token}`)
}

export default client
