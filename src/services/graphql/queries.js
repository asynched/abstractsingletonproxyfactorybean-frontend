import { gql } from 'graphql-request'
import client from '.'

export const getUserData = async () => {
  const query = gql`
    query GetSelf {
      getSelf {
        username
        firstName
        lastName
      }
    }
  `

  const data = await client.request(query)

  return data
}

export const getLessonsData = async () => {
  const query = gql`
    query {
      lessonByDay(day: "QUA") {
        id
        url
        schedule
        subject {
          name
          teacher {
            id
            name
            imageUrl
          }
        }
      }
    }
  `

  const data = await client.request(query)

  return data.lessonByDay
}

export const getTasksData = async () => {
  const query = gql`
    query {
      allTasks {
        id
        title
        attachments
        dueDate
        teacher {
          id
          name
          imageUrl
        }
      }
    }
  `

  const data = await client.request(query)

  return data.allTasks
}
