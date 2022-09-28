import axios from 'axios'

export const $api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})

$api.interceptors.request.use(
  config => {
    config.params = {...config.params, appid: process.env.NEXT_PUBLIC_API_KEY, lat: 30, lon: 10, lang: 'ru' }
    return config
  },
  error => Promise.reject(error)
)
