import api from './api'
import { monadicError } from '@helpers/promises'

export const loginUser = monadicError(async (username, password) => {
  const { data: response } = await api.post('', {
    query: `#graphql
        mutation ($username: String!, $password: String!) {
          tokenAuth(username: $username, password: $password) {
            token
          }
        }
    `,
    variables: {
      username,
      password,
    },
  })

  return response.data
})
