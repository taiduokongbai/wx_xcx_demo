//logs.js
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
  }
})
