import {reqConfig} from './config/reqConfig';
import {baseUrl} from './config/baseConfig';
import { transformTime } from './util';
import wepy from 'wepy'
import { getToken } from '../api/accessToken'
async function requestApi(action, data = {}) {
  if (Object.keys(reqConfig).indexOf(action) < 0) {
    throw new Error('未配置该action:', action)
  } else {
    let url = `${baseUrl}${reqConfig[action].url}`
    let header = reqConfig[action].header
    if (reqConfig[action].needToken) {
      header.Authorization = await getToken()
    }
    return wepy.request({
      url: url,
      data: data,
      method: reqConfig[action].method,
      header: header
    })
  }
}
async function singletonForToken(action, data = {}) {
  return new Promise((resolve, reject) => {
    // 重复请求同个请求时，请求第一个时，添加锁，避免多次请求。将请求变成缓存队列模式。
    // 核心思想：缓存singleton这个Promise的resolve 选择合适的时候回调
    global.singleton = global.singleton || {}
    global.singleton[action + 'lock'] = global.singleton[action + 'lock'] || false
    if (global.singleton[action + 'lock']) {
      global.singleton[action].push(resolve)
    } else {
      // 未加锁，那么请求
      global.singleton[action + 'lock'] = true
      // global.singleton[action]不存在时，
      global.singleton[action] = [resolve];
      requestApi(action, data).then((output) => {
        let cb = global.singleton[action].shift()
        while (cb) {
          cb(output)
          cb = global.singleton[action].shift()
        }
        global.singleton[action + 'lock'] = false
      })
    }
  })
}

export {
  requestApi,
  singletonForToken,
  transformTime
}
