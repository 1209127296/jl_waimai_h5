import axios from 'axios'
import store from "../store/store"
import {Toast} from 'vant'
import 'vant/lib/index.css'

// create an axios instance
const service = axios.create({
  //baseURL: process.env.BASE_API, // api的base_url
  timeout: 30000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  request => {
    request.headers = {
      "X-Tag": "flyio",
      'Cookie': cookie.loginCookie,
      'content-type': 'application/json;charset=utf-8'
    };
    // console.log('请求token:'+store.state.token)
    if (store.state.token.length!=0){
      request.headers['token']= store.state.token
    }
    // request.headers['token']= 'abcdef'
  
    let authParams = {
      //公共参数
     /* "categoryType": "SaleGoodsType@sim",
      "streamNo": "wxapp153570682909641893",
      "reqSource": "MALL_H5",
      "appid": "string",
      "timestamp": new Date().getTime(),
      "sign": "string"*/
    };
  
    request.body && Object.keys(request.body).forEach((val) => {
      if(request.body[val] === ""){
        delete request.body[val]
      };
    });
    request.body = {
      ...request.body,
      ...authParams
    }
    return request;
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// respone interceptor
service.interceptors.response.use(data => {// 响应成功关闭loading
  return data;
}, error => {
  Toast('请求出错')
  return Promise.reject(error)
})
export default service
