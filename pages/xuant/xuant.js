// pages/xuant/xuant.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  formBindsubmit: function (e) {
    var x = 0;
    var sum = x+'';
    const db = wx.cloud.database;
    /*db.collection('IDbiao').doc('XBXmUuSiwXKAQm3Z').get({
      success(res) {
        // res.data 包含该记录的数据
        //sum = res.data.sum;
      }
    })*/
    //e.detail.value["tpid"]//文本框的值
    wx.showToast({
      title: sum,//s"请检查你的id是否正确",
      icon: "loading",
      duration: 2000
    });
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