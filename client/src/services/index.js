import axios from 'axios'
const Client = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? `${window.location.origin}/api`
      : 'http://localhost:3001/api'
})
Client.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem('token')
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default Client
