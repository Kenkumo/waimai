/* 
axios封装
*/
import axios from 'axios'
import config from '@/config'

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro;

class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
    this.queue = {}
  }

  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      header: {

      }
    }
    return config
  }

  interceptors (instance,) {
    instance.interceptors.request.use((config) => {
      // 拦截和处理请求
      // console.log('拦截');
      
      return config
    })

    instance.interceptors.response.use((res) => {
      // 处理响应
      // console.log('处理');
      
      return res.data
    })
    ,(error) => {
      // 请求出问题，处理问题
      return {error}
    }
  }

  request(options) {
    const instance = axios.create() // 创建实例对象
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

const axiosObj = new HttpRequest(baseUrl)
export default axiosObj

