<template>
    <div class="search_container">
        <div class="search_list_view clear" v-if="list.length">
            <div class="search_btn_box right">
                <el-button type="primary" round @click="clickSearch ">搜索</el-button>
            </div>
            <div class="search_item_box right" v-for="(item,index) in list" :key="index">
                <div class="search_text-box" v-if="item.type==='text'">
                    <el-input v-model="list[index].value" :placeholder="item.placeholder"></el-input>
                </div>
                <div class="search_select-box" v-else-if="item.type==='select'">
                    <el-select v-model="list[index].value" placeholder="请选择">
                        <el-option
                                v-for="(option,count) in item.select"
                                :key="count"
                                :label="option.value"
                                :value="option.key">
                        </el-option>
                    </el-select>
                </div>
                <div class="search_data_box" v-else-if="item.type==='date'">
                    <el-date-picker v-model="list[index].value" type="date" placeholder="选择日期"></el-date-picker>
                </div>
                <div class="search_datatime_box" v-else-if="item.type==='datetime'">
                    <el-date-picker v-model="list[index].value" type="datetime" placeholder="选择日期时间"></el-date-picker>
                </div>
                <div class="search_city_box" v-else-if="item.type==='city'">
                    <el-cascader
                            :options="countryData"
                            v-model="list[index].value"
                            :separator="' '"
                    >
                    </el-cascader>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import countryData from '../../js/country-data'
    export default {
        props: {
            list: {
                type: Array,
                default: function () {
                    return [];
                }
            },


            imgUrl: {
                type: String,
                default: function () {
                    return '';
                }
            },
            shareCoachCard: {
                type: String,
                default: function () {
                    return '';
                }
            }
        },
        data(){
            return{
                countryData:countryData
            }
        },
        computed: {
            defaultActive: function () {
                return this.$route.path.replace('/', '');
            }

        },
        methods: {
            clickSearch () {
                var obj={};
               this.list.forEach(function (item,index) {
                   obj[item.key]=item.value;
               })
                this.$emit("searchSend", obj)
            }

        }

    }
</script>


<style lang="less" scoped>
    @import './index.less';
</style>
