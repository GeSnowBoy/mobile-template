import axios from 'axios';
import {baseURL} from "../config";

// 超时时间
axios.defaults.baseURL = baseURL;
// 设置公共请求头
// axios.defaults.headers.common['Peacock-Header'] = 'Peacock-Header-Test';
// axios.defaults.headers.post['content-Type'] = 'appliction/x-www-form-urlencoded';
// 请求超时  10秒
axios.defaults.timeout = 10000;
axios.defaults.params = {}

// http请求拦截器
axios.interceptors.request.use(config => {
  // 需要添加token
  if (config.needToken !== undefined) {
    let user = utils.$user.get();
    if (user && user.token) {
      config.headers.session = user.token;
    }
  }
  return config
}, error => {
  return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {
  return data.data;
}, error => {
  return Promise.reject(error)   // 返回接口返回的错误信息
})
