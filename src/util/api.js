import {ctx} from './index'

let baseUrl = ctx
if (process.env.NODE_ENV === 'production') {
  baseUrl = 'pro'
}
if (process.env.NODE_ENV === 'development') {
  // 干一些测试时不可告人的事情
  baseUrl = 'dev'
}

export {
  baseUrl
}
