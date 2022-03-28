<template>
    <div class="yiliaofuwu-detail" v-loading="loading">
        <div>
            <e-container>
                <div style="margin:30px 0 0 0;background-color:#FFFFFF;box-shadow:0px 0px 8px 3px #787878">
                    <e-module-sn-title title="医疗服务详情">
                        <div class="mainR">
                            <div class="brandnavbox">
                                <h2 v-text="map.fuwuxiangmu"></h2>
                            </div>
                            <div class="detailbox">
                                <div class="xq">
                                    <!--<div class="tit" v-text="map.fuwuxiangmu"></div>-->
                                    <div class="date">编号：{{map.bianhao}}</div>
                                    <div class="date">价格：{{map.jiage}}</div>
                                    <div class="date">已预约人数：{{map.yiyuyuerenshu}}</div>
                                    <div style="text-align: center">
                                    <el-button type="primary" @click="$router.push('/fuwuyuyueadd?id='+map.id)">服务预约</el-button>
                                    </div>
                                    <div class="con cl">
                                        <p v-html="map.fuwuneirong"></p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </e-module-sn-title>

                </div>

            </e-container>
        </div>
    </div>
</template>
<style type="text/scss" scoped lang="scss">
</style>
<script>
    import api from '@/api';
    import {extend} from '@/utils/extend';

    export default {
        data() {
            return {
                loading: false,   // 加载
                isCollect: false, // 是否已经收藏
                map: {
                    bianhao: '',
                    fuwuxiangmu: '',
                    tupian: '',
                    jiage: '',
                    yiyuyuerenshu: '',
                    fuwuneirong: '',
                },
            }
        },
        props: {
            id: {
                type: [String, Number],
                required: true
            }
        },
        watch: {
            id: {
                handler() {
                    this.loadDetail();
                },
                immediate: true
            },
        },
        computed: {},
        methods: {
            loadDetail() {
                if (this.loading) return;
                this.loading = true;
                this.$get(api.yiliaofuwu.webdetail, {
                    id: this.id
                }).then(res => {
                    this.loading = false;
                    if (res.code == api.code.OK) {
                        extend(this, res.data);
                    } else {
                        this.$message.error(res.msg);
                    }
                }).catch(err => {
                    this.loading = false;
                    this.$message.error(err.message);
                });
            },

        },
        created() {
        },
        mounted() {
        },
        destroyed() {
        }
    }
</script>
