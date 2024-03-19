import axios from 'axios'
import { useTokenStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import errorCode from './errorCode'
import { ElMessage } from 'element-plus'
// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:5173/api',
  timeout: 30000
})
// 请求拦截
service.interceptors.request.use(
  (config) => {
    const { token } = storeToRefs(useTokenStore())
    const isToken = (config.headers || {}).isToken === false
    if (token.value && !isToken) {
      config.headers.Authorization = `Bearer ${token.value}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 请求响应
service.interceptors.response.use(
  (response) => {
    const res = response.data,
      code = res.code,
      msg = errorCode[code] || res.msg || res['default']

    if (code === 500) {
      ElMessage({
        message: msg || 'Error',
        type: 'error',
        duration: 5000
      })
      return Promise.reject(new Error(msg))
    }
    if (code !== 200) {
      console.log(code)
      ElMessage({
        message: msg || 'Error',
        type: 'error',
        duration: 5000
      })
      return Promise.reject('Error')
    }
    return response
  },
  (error) => {
    // 错误统一处理
    console.log('error', error)
    let { message } = error
    switch (message) {
      case 'Network Error':
        message = '后端接口异常，请稍后重试'
        break
      case message.includes('timeout'):
        message = '请求超时，请稍后重试'
        break
      default:
        message = '系统未知错误，请反馈给管理员'
        break
    }
    ElMessage({
      message,
      type: 'error',
      duration: 5000
    })
    return Promise.reject(error)
  }
)

export default service
