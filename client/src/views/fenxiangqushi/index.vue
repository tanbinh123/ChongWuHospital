<template>
    <div v-loading="loading">
        <div>
            <e-container>
                <div style="margin:30px 0 0 0;background-color:#FFFFFF;box-shadow:0px 0px 8px 3px #878787">
                    <e-module-sn-title title="日常分享列表">
                        <div class="scck clearfix">
                            <div style="margin-bottom: 20px">
                                <form action="javascript:;" @submit="searchSubmit" class="form-search">
                                    <table class="jd-search">
                                        <tbody>
                                        <tr>
                                            <td class="label">
                                                标题
                                            </td>
                                            <td>
                                                <el-input
                                                        type="text" style="width: 150px"
                                                        v-model="search.biaoti"
                                                        placeholder="请输入关键词">

                                                </el-input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <el-button type="success" @click="searchSubmit">搜索</el-button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </form>
                            </div>
                            <el-row :gutter="20">
                                <el-col :md="6" class="card" v-for="r in list">
                                    <div class="card">
                                        <div class="card-img">
                                            <router-link :to="{path:'/fenxiangqushidetail',query:{id:r.id}}">
                                                <e-img-box pb="100" :src="r.tupian">
                                                </e-img-box>
                                                <div class="overlay"></div>
                                            </router-link>
                                        </div>
                                        <div class="card-body">
                                            <h4 class="card-title">
                                                <router-link :to="{path:'/fenxiangqushidetail',query:{id:r.id}}"
                                                             v-html="$substr(r.biaoti,10)"></router-link>
                                            </h4>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                        <div style="margin-top: 10px;text-align: center">
                            <el-pagination
                                    @current-change="loadList"
                                    :current-page="page"
                                    :page-size="15"
                                    layout="total, sizes, prev, pager, next, jumper"
                                    :total="totalCount">
                            </el-pagination>
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
    import objectDiff from 'objectdiff';


    /**
     * 后台列表页面
     */
    export default {
        data() {
            return {
                loading: false,
                list: [],
                search: {


                    biaoti: '',

                    tupian: '',

                    neirong: '',

                    fenxiangren: '',

                },
                page: 1, // 当前页
                pagesize: 12, // 页大小
                totalCount: 0, // 总行数
                total: {},

            }
        },
        watch: {},
        computed: {},
        methods: {
            searchSubmit() {
                this.loadList(1);
            },
            loadList(page) {
                // 防止重新点加载列表
                if (this.loading) return;
                this.loading = true;
                this.page = page;
                // 筛选条件
                var filter = extend(true, {}, this.search, {page: page + "", pagesize: this.pagesize + ""});
                var diff = objectDiff.diff(filter, this.$route.query);
                if (diff.changed != 'equal') { // 筛选的条件不一致则更新链接
                    this.$router.replace({  // 更新query
                        path: this.$route.path,
                        query: filter
                    });
                }
                this.$post(api.fenxiangqushi.weblist, filter).then(res => {
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
            selectRadio(target, name) {
                this.search[target] = name;
                this.searchSubmit(1);
            },
        },
        beforeRouteUpdate(to, form, next) {
            var search = extend(this.search, to.query)
            if (search.page) {
                this.page = Math.floor(to.query.page)
                delete search.page
            }
            if (search.pagesize) {
                this.pagesize = Math.floor(to.query.pagesize)
                delete search.pagesize
            }
            this.loadList(1);
            next();
        },
        created() {
            var search = extend(this.search, this.$route.query)
            if (search.page) {
                this.page = Math.floor(this.$route.query.page)
                delete search.page
            }
            if (search.pagesize) {
                this.pagesize = Math.floor(this.$route.query.pagesize)
                delete search.pagesize
            }
            this.loadList(this.page);
        },
        mounted() {
        },
        destroyed() {
        }
    }
</script>
