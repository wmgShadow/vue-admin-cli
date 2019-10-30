<template>
    <div class="fillcontain">
        <search :list="list" @searchSend="getData"></search>
        <div class="table_button-box">
            <el-button type="info" size="small" round @click="clickReLoadBtn ">刷新</el-button>
            <el-button type="info" size="small" round @click="clickAppendRecord  ">新建</el-button>
        </div>
        <div class="table_container">
            <el-table :data="tableData" @cell-click="clickTable" highlight-current-row style="width: 100%">
                <el-table-column ref="indexcColumn" type="index" width="100"></el-table-column>
                <el-table-column property="registe_time" label="注册日期" width="220"></el-table-column>
                <el-table-column property="username" label="用户姓名" width="220"></el-table-column>
                <el-table-column property="city" label="注册地址"></el-table-column>
                <el-table-column label="操作">
                    <template scope="scope" type="expand">
                        <el-button
                                size="small"
                                @click="handleEdit(scope.$index, scope.row)">编辑
                        </el-button>
                        <el-button
                                size="small"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="Pagination" style="text-align: left;margin-top: 10px;">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-size="20"
                        layout="total, prev, pager, next"
                        :total="count">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../../common/public/headTop'
    import search from '../../common/public/search'
    import {sweepstakes} from '../../api/store'
    // import {getUserList, getUserCount} from '@/api/getData'
    export default {
        data() {
            return {
                tableData: [{
                    registe_time: '2016-05-02',
                    username: '王小虎',
                    city: '上海市普陀区金沙江路 1518 弄',
                    date: '1995.2.1'
                }, {
                    registe_time: '2016-05-04',
                    username: '王小虎',
                    city: '上海市普陀区金沙江路 1517 弄',
                    date: '1995.2.1'
                }, {
                    registe_time: '2016-05-01',
                    username: '王小虎',
                    city: '上海市普陀区金沙江路 1519 弄',
                    date: '1995.2.1'
                }, {
                    registe_time: '2016-05-03',
                    username: '王小虎',
                    city: '上海市普陀区金沙江路 1516 弄',
                    date: '1995.2.1'
                }],
                list: [
                    {
                        key: 'NAME',
                        placeholder: '请填写名称',
                        value: '',
                        type: 'text',
                    },
                    {
                        key: 'AGE',
                        placeholder: '请填写年龄',
                        value: '',
                        type: 'text',
                    },
                    {
                        key: 'starDate',
                        placeholder: '请填写开始时间',
                        value: '',
                        type: 'date',
                    },
                    {
                        key: 'endTime',
                        placeholder: '请填写结束时间',
                        value: '',
                        type: 'datetime',
                    },
                    {
                        key: 'city',
                        placeholder: '请填写城市',
                        value: [],
                        type: 'city',
                    },
                    {
                        key: 'SEX',
                        placeholder: '请填写性别',
                        value: '',
                        type: 'select',
                        select: [
                            {
                                key: '0',
                                value: '男'
                            },
                            {
                                key: '1',
                                value: '女'
                            }
                        ]
                    },
                ],
                currentRow: null,
                offset: 0,
                limit: 20,
                count: 0,
                currentPage: 1,
            }
        },
        components: {
            headTop,
            search
        },
        created() {
            this.initData();
        },
        mounted() {

            sweepstakes({},
                function (res) {

                },
                function (err) {

                })


        },
        methods: {
            async initData() {
                try {
                    const countData = await getUserCount();
                    if (countData.status == 1) {
                        this.count = countData.count;
                    } else {
                        throw new Error('获取数据失败');
                    }
                    this.getUsers();
                } catch (err) {
                    console.log('获取数据失败', err);
                }
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            getData(obj) {
                console.log(obj)
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.offset = (val - 1) * this.limit;
                this.getUsers()
            },
            clickIndex(e) {
                console.log(e);
            },
            clickTable(row, column, cell, event) {
                if (column.property == 'username') {
                    console.log(row[column.property])
                }

            },
            // clickName(e) {
            //     console.log(e);
            // },
            clickReLoadBtn() {
                this.$store.dispatch('updataRefreshState') //在这里触发
            },
            clickAppendRecord() {

            },
            async getUsers() {
                const Users = await getUserList({offset: this.offset, limit: this.limit});
                this.tableData = [];
                Users.forEach(item => {
                    const tableData = {};
                    tableData.username = item.username;
                    tableData.registe_time = item.registe_time;
                    tableData.city = item.city;
                    this.tableData.push(tableData);
                })
            }
        },
    }
</script>

<style lang="less">
    @import './index';

</style>
