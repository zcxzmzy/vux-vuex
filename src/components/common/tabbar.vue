<template>
    <div>
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
    import { Tabbar, TabbarItem} from 'vux'
    export default {
        name: "tabbar",
        data () {
            return {
                selectBorrow:true,
                selectRepay:true,
                selectMine:true

            }
        },
        components: {
            Tabbar,
            TabbarItem
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

<style scoped>

</style>