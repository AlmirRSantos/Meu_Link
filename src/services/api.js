import axios from 'axios'

export const key = '241eab42b8981517eea1766e57345d31723214fb'

const api = axios.create({
  baseURL: 'https://api.ssl.bitly.com/v4',
  headers: {
    'Authorization': `Bearer ${key}`
  }
})

export default api;
