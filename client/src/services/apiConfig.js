import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY
export const BASE_URL = `https://${API_KEY}.mockapi.io/`

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {}
})

export default api