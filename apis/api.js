import { httpRequest } from '../utils/request'
const setting = require('../assets/js/setting');
const baseUrl = setting.apiUrl;
// 获取token 授权登录
export const getToken = (data) => {
  return httpRequest({
    url: `${baseUrl}/login/oauth`,
    method: 'POST',
    data
  })
}
// 获取个人信息
export const getPersonInfo = (data) => {
  return httpRequest({
    url: `${baseUrl}/login/index?op=get_info`,
    method: 'POST',
    data
  })
}
