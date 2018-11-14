<template lang="pug">
    div.index
       div.ceshi 首页
</template>
<script>
    import mixin from '../mixins/mixinLogin'
    import { mapState , mapActions, mapGetters} from 'vuex'
    export default {
        name: "index",
        computed:{
            ...mapState("repay",{
                money:state =>state.money
            }),
            ...mapGetters("repay",[
                'ceshiGetters',
            ])
        },
        created(){
            const arr = this.$store.getters["repay/ceshiGetters"]
            const gettersFn = this.$store.getters["repay/moneySum"](56)

            console.log("===========")
            console.log(arr)
            console.log(gettersFn)
            console.log("------------")
            console.log(this.ceshiAction())
        },
        methods:{
            ...mapActions("repay",[
                "ceshiAction",
                "addActions"
            ])
        }

    }
</script>

<style lang="less">
    @import "mixin/base";
    .index {
         .ceshi{
             .bg(#cccccc);
             .center()
         }
    }


</style>
