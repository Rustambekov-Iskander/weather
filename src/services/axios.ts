import axios from "axios";

export const $api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

$api.interceptors.request.use(
  config => {
    config.params = {appid: process.env.NEXT_PUBLIC_API_KEY}
  },
  error => Promise.reject(error)
)