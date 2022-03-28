<template>
    <div v-loading="loading">
        <div>
            <e-container>
                <div style="margin:30px 0 0 0;background-color:#FFFFFF;box-shadow:0px 0px 8px 3px #8E8E8E">
                    <e-module-sn-title title="商品列表">
                        <div class="paoche">
                            <div style="margin-bottom: 20px">
                                <form action="javascript:;" @submit="searchSubmit" class="form-search">
                                    <table class="jd-search">
                                        <tbody>
                                        <tr>
                                            <td class="label">
                                                商品名称
                                            </td>
                                            <td>
                                                <el-input
                                                        type="text" style="width: 150px"
                                                        v-model="search.shangpinmingcheng"
                                                        placeholder="请输入关键词">

                                                </el-input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="label">
                                                分类
                                            </td>
                                            <td>
                                                <p class="search-radio">

                                                    <a href="javascript:;" @click="selectRadio('fenlei','')"
                                                       :class="{active:!search.fenlei}">全部</a>

                                                    <a href="javascript:;"
                                                       v-for="r in mapshangpinfenlei4"
                                                       @click="selectRadio('fenlei',r.id)"
                                                       :class="{active:search.fenlei == r.id}" v-text="r.fenlei">

                                                    </a>

                                                </p>
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

                            <el-row class="ul_model" :gutter="20">
                                <el-col :md="6" class="li_model" :key="r.id" v-for="r in list">
                                    <div class="li_model">
                                        <router-link :to="{path:'/shangpinxinxidetail',query:{id:r.id}}"
                                                     class="img_model">
                                            <e-img-box :src="r.tupian" pb="100"></e-img-box>
                                        </router-link>
                                        <div class="d_model">
                                            <div class="brand_model">
                                                <router-link :to="{path:'/shangpinxinxidetail',query:{id:r.id}}"
                                                             class="a_cen">
                                                    {{ $substr(r.shangpinmingcheng,15) }}
                                                </router-link>
                                            </div>
                                            <div class="tit_model">
                                                <p>￥ {{ r.jiage }} </p>
                                            </div>

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


                    shangpinbianhao: '',

                    shangpinmingcheng: '',

                    fenlei: '',

                    tupian: '',

                    jiage_start: '',
                    jiage_end: '',

                    kucun_start: '',
                    kucun_end: '',

                    xiaoliang_start: '',
                    xiaoliang_end: '',

                    shangpinxiangqing: '',

                },
                page: 1, // 当前页
                pagesize: 12, // 页大小
                totalCount: 0, // 总行数
                total: {},

                mapshangpinfenlei4: [],
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
                this.$post(api.shangpinxinxi.weblist, filter).then(res => {
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
