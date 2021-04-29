// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  createProject(e){
    const type = e.currentTarget.dataset['type'];
    switch (type) {
      case 'camera':
      case 'album':
        this.chooseImage(type).then(res=>{
          console.log(res.tempFilePaths);
          console.log(res);
          const path = res.tempFilePaths[0];
          if (path) {
            wx.navigateTo({
              url:`/pages/edit/edit?image=${path}`
            })
          }
        })
        break;
      
      default:
        break;
    }
  },

  chooseImage(type){
    return new Promise((resolve)=>{
      wx.chooseImage({
        count: 1,
        sizeType: ['original'],
        sourceType: [type],
        success (res) {
          resolve(res);
        }
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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