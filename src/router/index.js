import Vue from 'vue'
import Router from 'vue-router'
import Manage from '../components/manage'
import Login from '../components/login'
import Home from '../components/home'
import AddShop from '../components/addShop'
import ShopList from '../components/shopList'
import UserList from '../components/userList'


Vue.use(Router)
export default new Router({
    //mode: 'history',
    routes: [
        {
            path: '/index',
            component: Manage,
            children: [
                {
                    path: '',
                    component: Home,
                    meta: [],
                },
                {
                    path: '/addShop',
                    component: AddShop,
                    meta: ['添加数据', '添加商铺'],
                },
                // {
                //     path: '/addGoods',
                //     component: addGoods,
                //     meta: ['添加数据', '添加商品'],
                // },
                {
                    path: '/userList',
                    component: UserList,
                    meta: ['数据管理', '用户列表'],
                },
                {
                    path: '/shopList',
                    component: ShopList,
                    meta: ['数据管理', '商家列表'],
                },
                // {
                //     path: '/foodList',
                //     component: foodList,
                //     meta: ['数据管理', '食品列表'],
                // },
                // {
                //     path: '/orderList',
                //     component: orderList,
                //     meta: ['数据管理', '订单列表'],
                // },
                // {
                //     path: '/adminList',
                //     component: adminList,
                //     meta: ['数据管理', '管理员列表'],
                // },
                // {
                //     path: '/visitor',
                //     component: visitor,
                //     meta: ['图表', '用户分布'],
                // },
                // {
                //     path: '/newMember',
                //     component: newMember,
                //     meta: ['图表', '用户数据'],
                // },
                // {
                //     path: '/uploadImg',
                //     component: uploadImg,
                //     meta: ['文本编辑', 'MarkDown'],
                // },
                // {
                //     path: '/vueEdit',
                //     component: vueEdit,
                //     meta: ['编辑', '文本编辑'],
                // },
                // {
                //     path: '/adminSet',
                //     component: adminSet,
                //     meta: ['设置', '管理员设置'],
                // },
                // {
                //     path: '/sendMessage',
                //     component: sendMessage,
                //     meta: ['设置', '发送通知'],
                // },
                // {
                //     path: '/explain',
                //     component: explain,
                //     meta: ['说明', '说明'],
                // }
                 ],
            meta: ['主页'],

        },
        {
            path: '/login',
            component: Login,
            meta: ['登录'],
        },
        {
            path: '/',
            redirect:'/index'
        }
    ]
})
