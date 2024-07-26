const accountInfo = wx.getAccountInfoSync();
// release 正式服
// develop 开发版
let Setting = {
  "apiUrl": "",  // 开发版
  //  "apiUrl": "", // 正式服
}
module.exports = Setting