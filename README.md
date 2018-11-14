# vux+vuex脚手架

>这个版本适用于喜欢用状态管理的小伙伴，里面有两个模块的demo(支持ios6和安卓4)，可以选用pug和less

>使用方法主要功能点
>接口路径-----api/data
>1接口调取方法，直接在页面组件中引入，例如import {getOrderList} from '@/api/data'
然后直接getOrderList(arg).then(//在这里面处理逻辑就行了)
接口可配置参数：支持get,post(默认post),json,表单(默认表单)，token(默认带token),第三方，需要什么只需在调取接口函数里面配置即可
    
>2组件模块和状态模块的方法
如果想新增一个模块，首先在page里面建一个组件文件夹，这个模块的所有页面组件写在这个文件下面，然后在store/modules下面建一个状态js,
mutation-types.js里面的mutation常量是所有模块共用的，通过注释区分


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
