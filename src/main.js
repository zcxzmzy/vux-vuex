
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import  { LoadingPlugin } from 'vux'
import 'babel-polyfill'
import promise from 'es6-promise';
import utils from '@/utils/utils'
import { ToastPlugin} from 'vux'
import setDocumentTitle from './utils/setDocumentTitle'
import VueScroller from 'vue-scroller'
import request from '@/utils/request'
import store from "./store"
Vue.use(Vuex)
promise.polyfill();
Vue.use(ToastPlugin)
Vue.use(VueScroller)
Vue.use(LoadingPlugin)

/*公共路由跳转*/
const goPage = (page)=>{
  router.push({
    path: page
  })
}

const state = {
  isShowTabbar:true
}

/*公共toast*/

Vue.prototype.showToast = function( showPositionValue,type,text,width="10em"){
  this.$vux.toast.show({
    showPositionValue: false,
    text: text,
    type: type,
    width: width,
    position: 'bottom',
    showBackArrow:true
  })
}

Vue.prototype.goPage = goPage
Vue.prototype.S  = utils.S
Vue.prototype.G = utils.G
Vue.config.productionTip = false
Vue.prototype.request = request
Vue.prototype.formatDate = utils.formatDate
Vue.prototype.setDocumentTitle = setDocumentTitle



/*控制底部显示*/

 router.beforeEach((to,from,next)=>{
   let name = to.name
   if(name == 'Index' || name == 'memberCenter'|| name == 'repay'){
     store.state.isShowTabbar = true
   }else{
     store.state.isShowTabbar = false
   }
   next()
 })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
