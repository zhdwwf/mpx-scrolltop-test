//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    scrollTop: 0,
    listData: []
  },
  onLoad: function () {
    let data = []
    for (let i = 0; i <= 100; i++) {
      data.push(i)
    }
    this.setData({listData:data})
  },
  back() {
    this.setData({scrollTop:0})
  }
})
