
import http from '../util/http'
let baseUrl
if (process.env.NODE_ENV === 'production') {
  baseUrl = 'pro'
}
if (process.env.NODE_ENV === 'development') {
  // 干一些测试时不可告人的事情
  baseUrl = 'dev'
}

export default class base {
  static baseUrl = baseUrl
  static get = http.get.bind(http);
  static post = http.post.bind(http);
  static sleep = (time, cb) => {
    return new Promise((resolve) => setTimeout(() => {
      cb && cb()
      resolve()
    }, time))
  }
}