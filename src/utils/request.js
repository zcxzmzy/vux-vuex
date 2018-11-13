// 说明书
// 1封装的请求兼容get post，
// 2由于大项目中都用到了第三方，他的baseUrl是不一样的，做了第三方兼容
// 3由于有个需要token有的不需要，做了兼容
// 4有的需要跨域，做了兼容
// 5测试环境和线上不一样的baseUrl做了兼容
// 6支持表单和json提交

import axios from 'axios'
import qs from 'qs'
import config from '@/config'
const baseApi = config.baseApi
const NODE_ENV = process.env.NODE_ENV

export default function request(...params){
  let baseUrl = ''
  let T = {
    url: params[0].url || 0,
    data: params[0].data || 0,
    method: params[0].methods || 'post',
    isToken:params[0].isToken || true,
    isFormStyle:params[0].isFormStyle || false,
    isJson:params[0].isJson || false,
    isThird:params[0].isThird || false,
    headers:{},
  }

  if(NODE_ENV == 'production'){
    baseUrl = baseApi.prod
  }else{
    baseUrl = baseApi.dev
  }
  if(T.isThird){
    if(NODE_ENV == 'production'){
       baseUrl = baseApi.thirdProd
    }else{
       baseUrl = baseApi.thirdDev
    }
  }

  if (!T.url) {
    return console.error('url不能为空')
  }
  if (!T.data) {
    return console.error('data不能为空')
  }

  if(T.isJson){
    T.headers = {
      'Content-Type':'application/json;charset=UTF-8'
    }
    T.data = JSON.stringify(T.data)
  }else{
    T.data = qs.stringify(T.data)
  }
  //后期打开
  if(T.isToken !='noToken'){
    T.headers.token = localStorage.getItem('token')
  }
  this.$vux.loading.show({
    text: '加载中...'
  })
  if(T.method == 'get' || T.method == 'GET'){
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: {'key': 'value'}
      })
    }).then(data=>{
      this.$vux.loading.hide()
      let results = data.data
      if(parseInt(results.code) == 1) {
        resolve(results)
      }
    })
  }
  return new Promise((resolve, reject) => {
    axios.post(baseUrl + T.url,T.data, {
        headers: T.headers
      }).then((data) => {
        let results = data.data
        this.$vux.loading.hide()
        if(parseInt(results.code) == 1) {
          resolve(results)
        }else if(parseInt(results.code) == 401){
          this.$router.push({
            path: 'login'
          })
        }else{
          resolve(results)
        }
    })
  })
}




