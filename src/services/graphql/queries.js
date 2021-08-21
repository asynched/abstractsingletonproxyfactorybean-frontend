import { gql } from '@apollo/client'

export const GET_USER_DATA_QUERY = gql`
  query GetSelf {
    getSelf {
      username
      firstName
      lastName
    }
  }
`

export const GET_LESSONS_DATA_QUERY = gql`
  query LessonByDay {
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

export const GET_TASKS_QUERY = gql`
  query AllTasks {
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

export const GET_NOTICES_QUERY = gql`
  query AllNotices {
    allNotices {
      id
      title
      text
      teacher {
        name
        imageUrl
      }
    }
  }
`
