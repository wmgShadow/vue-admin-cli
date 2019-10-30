<template>
    <div id="app" class="fillcontain" @click="event">
        <router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">
    import CONST from '../const';

    export default {
        name: 'app',
        methods: {
            //事件统计，添加data-event属性
            event: function (ev) {
                var target = ev.target;

            }
        }
    }
</script>
<style>
    @import "../common/less/base.less";
</style>
