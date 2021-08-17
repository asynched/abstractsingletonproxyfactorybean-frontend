import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/graphql/',
})

export const setAPIToken = token => {
  api.defaults.headers['Authorization'] = `Bearer ${token}`
}

export default api
