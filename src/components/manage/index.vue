<template>
    <div class="manage_page fillcontain">
        <head-top></head-top>
        <el-row style="height: 92%">
            <el-col :span="4" style="min-height: 100%; background-color: #324057;">
                <el-menu background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
                         style="min-height: 100%;" theme="dark" router>
                    <el-menu-item index="index"><i class="el-icon-menu"></i>首页</el-menu-item>

                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-document"></i>数据管理</template>
                        <el-menu-item index="userList">用户列表</el-menu-item>
                        <el-menu-item index="shopList">商家列表</el-menu-item>
                        <el-menu-item index="foodList">食品列表</el-menu-item>
                        <el-menu-item index="orderList">订单列表</el-menu-item>
                        <el-menu-item index="adminList">管理员列表</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-plus"></i>添加数据</template>
                        <el-menu-item index="addShop">添加商铺</el-menu-item>
                        <el-menu-item index="addGoods">添加商品</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title"><i class="el-icon-star-on"></i>图表</template>
                        <el-menu-item index="visitor">用户分布</el-menu-item>
                        <!-- <el-menu-item index="newMember">用户数据</el-menu-item> -->
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title"><i class="el-icon-edit"></i>编辑</template>
                        <!-- <el-menu-item index="uploadImg">上传图片</el-menu-item> -->
                        <el-menu-item index="vueEdit">文本编辑</el-menu-item>
                    </el-submenu>
                    <el-submenu index="6">
                        <template slot="title"><i class="el-icon-setting"></i>设置</template>
                        <el-menu-item index="adminSet">管理员设置</el-menu-item>
                        <!-- <el-menu-item index="sendMessage">发送通知</el-menu-item> -->
                    </el-submenu>
                    <el-submenu index="7">
                        <template slot="title"><i class="el-icon-warning"></i>说明</template>
                        <el-menu-item index="explain">说明</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
            <el-col :span="20" style="height: 92%">
                <el-col :span="24" style="height: 100%;overflow: auto;">
                    <keep-alive v-if="reloadState">
                        <router-view v-if="reloadState"></router-view>
                    </keep-alive>
                </el-col>

            </el-col>
        </el-row>
    </div>
</template>

<script>
    import headTop from '../../common/public/headTop/index'
    import {mapState} from 'vuex'

    export default {
        computed: {
            ...mapState(['reloadState'])
        },
        components: {
            headTop
        },
        data() {
            return {
                reload: true
            }
        },
        methods: {
            clickBtn() {
                var $this = this;
                this.reload = false;
                setTimeout(function () {
                    $this.reload = true
                })

            }
        },
    }
</script>


<style lang="less" scoped>
    @import './index.less';
</style>
