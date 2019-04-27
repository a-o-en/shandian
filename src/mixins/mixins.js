import wepy from 'wepy'

export default class commonMixins extends wepy.mixin {
  data = {
  }
  methods = {
  }
  events = {
    'prePage': () => {
      wx.navigateBack({
        delta: 1
      })
    }
  }
  onShow() {
  }

  onLoad() {
  }
}
