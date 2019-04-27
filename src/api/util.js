function wxLogin() {
  return new Promise((resolve, reject) => {
    wx.login({
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
  .catch(() => {
    console.log('wx.login登录错误')
  })
}

function transformTime(timeStamp, type) {
  let str = ''
  let date = new Date(timeStamp)
  switch (type) {
    case 3:
      str += date.getFullYear() + '年'
      str += (date.getMonth() + 1) + '月'
      str += date.getDate() + '日'
      break;
    default:
      str += (date.getMonth() + 1) + '月'
      str += date.getDate() + '日'
  }
  return str
}

export {
  wxLogin,
  transformTime
}
