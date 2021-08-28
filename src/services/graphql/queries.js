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
  query LessonByDay($day: String!) {
    lessonByDay(day: $day) {
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
        id
        name
        imageUrl
      }
    }
  }
`

export const GET_ALL_LESSONS_QUERY = gql`
  query AllLessons {
    allLessons {
      id
      schedule
      weekDay
      url
      subject {
        name
      }
    }
  }
`

export const GET_TASK_QUERY = gql`
  query GetTask($uuid: UUID!) {
    task(uuid: $uuid) {
      id
      title
      description
      dueDate
      teacher {
        id
        name
        imageUrl
        email
        about
      }
      attachmentSet {
        id
        name
        description
        url
      }
    }
  }
`
export const GET_TEACHER_QUERY = gql`
  query Teacher($uuid: UUID!) {
    teacher(uuid: $uuid) {
      id
      name
      imageUrl
      email
      about
      subjectSet {
        id
        name
        description
      }
    }
  }
`

export const GET_COURSE_STATUS_QUERY = gql`
  query CourseStatus {
    courseStatus {
      tasks
      notices
      resources
    }
  }
`
