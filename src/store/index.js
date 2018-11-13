
import Vue from 'vue'
import Vuex from 'vuex'
import repay from "./modules/repay"
import member from "./modules/member"

Vue.use(Vuex)

export default new Vuex.Store({
    // state: {
    //     ceshi:"全局state"
    // },
    // getters:{
    //      ceshi:state => "全局getter"
    // } ,
    // mutations: {
    //     ceshi(state,arg){
    //        //全局的mutations
    //     }
    // },
    // actions: {
    //     ceshi({state,commit,dispath},arg){
    //         //全局的action
    //     }
    // },
    modules: {
        repay,
        member,
    }
})
