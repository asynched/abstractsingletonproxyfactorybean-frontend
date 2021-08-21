import { gql } from '@apollo/client'

export const LOGIN_MUTATION = gql`
  mutation TokenAuth($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`

export const REGISTER_MUTATION = gql`
  mutation RegisterMutation(
    $username: String!
    $firstName: String!
    $lastName: String!
    $password: String!
  ) {
    register(
      username: $username
      firstName: $firstName
      lastName: $lastName
      password: $password
    ) {
      username
    }
  }
`
