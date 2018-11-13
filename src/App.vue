
<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <tabbar
      class="tabbarStyle"
      style="position: fixed"
      @on-index-change="tabChange"
      v-show="$store.state.isShowTabbar"
    >
      <tabbar-item link="/" selected>
        <!--<img v-show="selectBorrow" slot="icon" src="./assets/7.png">-->
        <!--<img v-show="!selectBorrow" slot="icon" src="./assets/4.png">-->
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/repay">
        <!--<img v-show="selectRepay" slot="icon" src="./assets/11.png">-->
        <!--<img v-show="!selectRepay" slot="icon" src="./assets/10.png">-->
        <span slot="label">还款</span>
      </tabbar-item>
      <tabbar-item link="/memberCenter">
        <!--<img v-show="selectMine" slot="icon" src="./assets/9.png">-->
        <!--<img v-show="!selectMine" slot="icon" src="./assets/8.png">-->
        <span slot="label">个人中心</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem,XHeader } from 'vux'
  export default {
    name: 'app',
    data () {
      return {
        selectBorrow:true,
        selectRepay:true,
        selectMine:true

      }
    },
    components: {
      Tabbar,
      TabbarItem,
      XHeader,
    },

    methods:{
      tabChange(e){
        switch (e){
          case 0:
            this.selectBorrow = false
            this.selectRepay = true
            this.selectMine = true
            break;
          case 1:
            this.selectBorrow = true
            this.selectRepay = false
            this.selectMine = true
            break;
          default:
            this.selectBorrow = true
            this.selectRepay = true
            this.selectMine = false
            break;
        }
      }
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @media screen and (min-width: 520px) {
    #app{
      font-family:DIN;
      width: 375px;
      height: 667px;
      display: flex;
      margin: 0 auto;
    }
    #app .tabbarStyle{
      width: 100%;
      margin: 0 auto;
    }
  }

</style>
