/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

const instance = axios.create({})
instance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
instance.interceptors.response.use(
  response => {
    const resData = (response.data || {}) as ResType
    const { code, msg, data } = resData
    if (code !== 0) {
      if (msg) {
        console.log(msg)
      }
      throw new Error(msg || 'Error')
    }

    return data as any
  },
  error => {
    return Promise.reject(error)
  }
)
export type ResType = {
  code: number
  data?: ResDataType
  msg?: string
}
export type ResDataType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}
export default instance
