import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 1000 * 20 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {

    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
/*
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 0) {
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
*/
    /**
     * 修正 json-server 返回的数据格式
     */
    return {
      code: 0,
      data: response.data
    }
  },
  error => {
    console.log('service.interceptors.response>error:') // for debug
    console.error(error)
    return Promise.reject(error)
  }
)

export default service
