//常用依赖，分享sdk，webview


import Vue from 'vue'
import App from './App'
import router from '../router'
import store from '../store'
import FastClick from 'fastclick'
import filters from '../utils/filter'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-default/index.css'


// require styles
Vue.config.productionTip = false;
//Vue和axios默认设置
//Vue.config.devtools = false
Vue.use(ElementUI)

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})
new Vue({
    el: '#app',
    mounted(){
        FastClick.attach(document.body);
    },
    router,
    store,
    template: '<App/>',
    components: {App}
})
