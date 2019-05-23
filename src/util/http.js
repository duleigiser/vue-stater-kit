import Vue from 'vue'
export default class http {
  static async request(methods, url, data, loading = false) {
    const param = {
      url: url,
      method: method,
      data: data
    }
    const res = await Vue.$http(param)
    if(this.isSuccess(res)) {
      return res.data.data
    } else {
      throw this.requestExction(res)
    }
  }
  static isSuccess({statusCode}) {
    return statusCode === 200
  }
  static requestExction(res) {
    return res
  }
  static get (url, data, loading = true) {
    return this.request('GET', url, data, loading);
  }
  static post (url, data, loading = true) {
    return this.request('POST', url, data, loading);
  }
}