import { SOME_MUTATION } from './mutation-types'

const state = {
    money:500,
    list:[]
}
const arr = [
    {name:"张三",age:18},
    {name:"李四",age:17},
    {name:"王五",age:19},
    {name:"赵刘",age:21},
    {name:"秦始皇",age:29},
    {name:"刘邦",age:56}
]
const getters = {
    /**
     *getter返回函数的例子
     * @param state
     * @param getters
     * @param rootState
     * @returns {function(*)}
     */
    moneySum : (state,getters,rootState) => (id) =>{
        return arr.find(item => item.age === id)
    },
    /**
     * getter返回数组的例子
     * @param state
     * @param getters
     * @param rootState
     * @returns {*[]}
     */
    ceshiGetters:(state,getters,rootState) =>{
        // return arr.map(item => ++item.age)
        return arr.filter(item => item.age == 18)
        // return arr.find(item => item.age == 29)
    }
}

const mutations = {
    [SOME_MUTATION](state,{amount}){
        const {id,name,age} = amount
        state.money += id
        console.log("计算后的价格====")
        console.log(state.money)
    },
    addMutations(state,{id,name,age}){
    
    }
}

const actions = {
    ceshiAction({commit,state},arg){
        commit({
            type: 'SOME_MUTATION',
            amount: {id:999,name:"张三",age:"678"}
        })
        // commit("changeMoney",{id:999,name:"张三",age:"678"})
    },
    addActions({commit,state},arg){
        console.log(arg)
    }
}










export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}