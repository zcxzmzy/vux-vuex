import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


export default new VueRouter({
  routes: [
      /*-----------------------
           首页入口
     */
        
        {
              path: '/',
              name: 'Index',
              component: resolve => require(['@/page/index'],resolve),
              meta: {
                  keepAlive: false // 不需要缓存
              }
        },

        {
              path: '/repay',
              name: 'repay',
              component: resolve => require(['@/page/repay/repay'],resolve),
              meta: {
                  keepAlive: false // 不需要缓存
              }
        },
    

        {
            path: '/memberCenter',
            name: 'memberCenter',
            component: resolve => require(['@/page/member/memberCenter'],resolve),
            meta: {
                keepAlive: false // 不需要缓存
            }
        }
    ]
})
