import Vue from 'vue'
import Vuex from 'vuex'

import {update} from '../api/store';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        status: 0,
        reloadState:true
    },
    mutations: {
        updateStatus(state, config) {
            state[config[0]] = config[1];
        },
        loadData(){
            update({
                xxx: 1
            }, function () {
                console.log(arguments)
            }, function () {
                console.log(arguments)
            })
        }

    },
//异步操作并不是必须放在actions中，最终触发的都是mutations
actions: {
   updataRefreshState({commit}, data){
       commit('updateStatus', ['reloadState',false])
       setTimeout(function () {
           commit('updateStatus', ['reloadState',true])
       },100)

   }
}
})
export default store
