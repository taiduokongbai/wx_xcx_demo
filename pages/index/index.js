//index.js
//获取应用实例
var data = require('../data/data.js');
Page({
  data: {
    curTab: 1,
    img_all: [],
    img_md: [],
    img_ws: []
  },
  selected: function (e) {
    this.setData({
      curTab: e.currentTarget.dataset.key || 1
    })
  },
  onLoad: function () {
    if (data.dataList) {
      this.setData({
        img_all: data.dataList.urlList_all,
        img_md: data.dataList.urlList_md,
        img_ws: data.dataList.urlList_ws
      })
    }
  },
  previewImage: function (e) {
    var current = e.target.dataset.src,
    urlList = data.dataList.urlList_all;
    let newList = []
    urlList.map(item=>{
      newList.push(item.url)
    })
    console.log(current)
    console.log(newList)
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: newList, // 需要预览的图片http链接列表  
      fail: function () {
        console.log('fail')
      },
      complete: function () {
        console.info("点击图片了");
      } 
    })
  }

})
