# vux+vuex脚手架

>这个版本适用于喜欢用状态管理的小伙伴，里面有两个模块的demo(支持ios6和安卓4)，可以选用pug和less

1使用方法主要功能点
接口路径-----api/data
接口调取方法，直接在页面组件中引入，例如import {getOrderList} from '@/api/data'
然后直接getOrderList(arg).then(//在这里面处理逻辑就行了)
接口可配置参数
    params[0].url || 0,
    data: params[0].data || 0,
    method: params[0].methods || 'post',
    isToken:params[0].isToken || true,
    isFormStyle:params[0].isFormStyle || false,
    isJson:params[0].isJson || false,
    isThird:params[0].isThird || false,
    headers:{}
    支持get,post(默认post),json,表单(默认表单)，token(默认带token),第三方，需要什么只需在调取接口函数里面配置即可，例如
   export const getRepayStatistics= (arg) => {
    return this.request({
        url: 'repay/statistics',
        data: arg,
        isToken: 'noToken'
    })
}
    


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
