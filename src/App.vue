<template lang="pug">
    div.app
        keep-alive
            router-view(v-if="$route.meta.keepAlive")
        router-view(v-if="!$route.meta.keepAlive")

        tabbar

</template>

<script>
    import Tabbar from "@/components/common/tabbar"

    export default {
        name: 'app',
        components: {
            Tabbar,
        }
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';

    @media screen and (min-width: 520px) {
        .app {
            .w(375px);
            .h(667px)
            .flex();
            .m2(0, auto)
            .tabbarStyle {
                .w(100%)
                .m2(0, auto)
            }
        }
    }

</style>
