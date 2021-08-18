import { monadicError } from '@helpers/promises'
import { gql } from 'graphql-request'
import client from '.'

export const loginUser = monadicError(async (username, password) => {
  const query = gql`
    mutation TokenAuth($username: String!, $password: String!) {
      tokenAuth(username: $username, password: $password) {
        token
      }
    }
  `

  const data = await client.request(query, {
    username,
    password,
  })

  return data
})
