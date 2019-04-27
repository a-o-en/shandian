import { getStore } from 'wepy-redux'
import { wxLogin } from './util';
import { singletonForToken } from './index';

const store = getStore()
// 获取保存在redux里面的token
function getAccessTokenByRedux() {
  // console.log('getState', store.getState())
  const accessToken = store.getState().global.accessToken
  const timeStamp = store.getState().global.timeStamp
  // 过期了
  if (new Date().getTime() > timeStamp) {
    console.log('token过期', timeStamp)
    return null
  }
  console.log('获取accessToken', accessToken)
  if (accessToken && accessToken !== '') {
    return accessToken
  }
  return null
}
// 通过请求或者token
async function getAccessTokenByRequest() {
  const code = (await wxLogin()).code
  const res = await singletonForToken('login', {code: code})
  const token = res.data.data.accessToken
  console.log('getAccessTokenByRequest', res)
  _saveToken(token)
  return token
}
function _saveToken(accessToken) {
  let timeStamp = new Date().getTime() + 60 * 60 * 2 * 1000
  store.dispatch({
    type: 'SET_ACCESSTOKEN',
    payload: accessToken
  })
  store.dispatch({
    type: 'SET_TIMESTAMP',
    payload: timeStamp
  })
}

async function getToken() {
  return getAccessTokenByRedux() || await getAccessTokenByRequest()
}

export {
  getToken
}
