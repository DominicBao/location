// pages/weizhi/weizhi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    heng: '121.55084', 
    zong: '29.85957', 
    markers: [{
      //iconPath: "../../image/gongju.png",
      id: 0,
      latitude: 40.002607,
      longitude: 116.487847,
      width: 35,
      height: 45
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var yi = "markers["+0+"].latitude"
    var er = "markers[" + 0 + "].longitude"
    var heng1;
    var zong1;
    wx.getLocation({
      type: 'gcj02',
      success:res=> {
        heng1 = res.latitude
        zong1 = res.longitude
        //console.log(heng1)
        //console.log("zong"+zong1)
        //const speed = res.speed
        //const accuracy = res.accuracy
        that.setData({
          [yi]: heng1,
          [er]: zong1
          //[er]: zong1
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})