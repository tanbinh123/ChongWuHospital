<template>
    <div class="jm-header">
        <div class="top-bar animate-dropdown">
            <e-container>
                <div class="header-top-inner">
                    <div class="cnt-account">
                        <ul class="list-unstyled">
                            <template v-if="$session.username">
                                <li>
                                    <router-link to="/admin/sy"><i class="el-icon-user-solid"></i>个人中心</router-link>
                                </li>
                                <li><a href="javascript:;" @click="logout"><i class="el-icon-warning-outline"></i>退出</a>
                                </li>
                            </template>
                            <template v-else>
                                <li>
                                    <router-link to="/login"><i class="el-icon-user"></i>系统登录</router-link>
                                </li>
                                <!--<li><a href="javascript:;">找回密码</a></li>-->
                            </template>
                        </ul>
                    </div>
                    <!-- /.cnt-account -->
                    <!-- /.cnt-cart -->
                    <div class="clearfix"></div>
                </div>
                <!-- /.header-top-inner -->
            </e-container>
            <!-- /.container -->
        </div>

        <div class="main-header">
            <e-container>
                <el-row :gutter="20">
                    <el-col :xs="24" :sm="24" :md="14" class="logo-holder">
                        <!-- ============================================================= LOGO ============================================================= -->
                        <div class="logo"><a href="javascript:;"> {{setting.title}} </a></div>
                        <!-- /.logo -->
                        <!-- ============================================================= LOGO : END ============================================================= -->
                    </el-col>
                    <!-- /.logo-holder -->

                    <el-col :xs="24" :sm="24" :md="10" class="top-search-holder">
                        <!-- /.contact-row -->
                        <!-- ============================================================= SEARCH AREA ============================================================= -->
                        <!--<div class="search-area">
                            <form method="get" action="javascript:;" @submit="searchKeyword">
                                <div class="control-group">
                                    <input class="search-field" v-model="keyword" name="shangpinbiaoti"
                                           placeholder="输入关键词"/>
                                    <button class="search-button" type="submit">
                                        <i class="el-icon-search"></i>
                                    </button>
                                </div>
                            </form>
                        </div>-->
                        <!-- /.search-area -->
                        <!-- ============================================================= SEARCH AREA : END ============================================================= -->
                    </el-col>
                    <!-- /.top-search-holder -->
                    <!-- /.top-cart-row -->
                </el-row>
                <!-- /.row -->
            </e-container>
            <!-- /.container -->
        </div>

        <div class="header-nav">
            <e-container>
                <div class="nav-list clearfix">
                    <ul class="clearfix">
                        <li :class="{active:$route.path == '/'}">
                            <router-link to="/">首页
                            </router-link>
                        </li>
                        <li :class="{active:$route.path == '/shangpinxinxi'}">
                            <router-link to="/shangpinxinxi">周边商品
                                <i class="el-icon-arrow-down"></i>
                            </router-link>
                            <ul class="nav-child">
                                <li v-for="m in listMenushangpinfenlei">
                                    <router-link :to="'/shangpinxinxi?fenlei='+m.id" v-text="m.fenlei"></router-link>
                                </li>
                            </ul>
                        </li>
                        <li :class="{active:$route.path == '/fenxiangqushi'}">
                            <router-link to="/fenxiangqushi">宠物趣事
                            </router-link>
                        </li>
                        <li :class="{active:$route.path == '/yiliaofuwu'}">
                            <router-link to="/yiliaofuwu">医疗服务
                            </router-link>
                        </li>
                        <li :class="{active:$route.path == '/chongwuzixun'}">
                            <router-link to="/chongwuzixun">宠物资讯
                                <i class="el-icon-arrow-down"></i>
                            </router-link>
                            <ul class="nav-child">
                                <li v-for="m in listMenuzixunfenlei">
                                    <router-link :to="'/chongwuzixun?fenlei='+m.id"
                                                 v-text="m.fenleimingcheng"></router-link>
                                </li>
                            </ul>
                        </li>
                        <li :class="{active:$route.path == '/liuyanfankuiadd'}">
                            <router-link to="/liuyanfankuiadd">留言反馈
                            </router-link>
                        </li>
                        <li :class="{active:$route.path == '/guanyudetail?id=1'}">
                            <router-link to="/guanyudetail?id=1">关于我们
                                <i class="el-icon-arrow-down"></i>
                            </router-link>
                            <ul class="nav-child">
                                <li>
                                    <router-link to="/guanyudetail?id=2">联系我们</router-link>
                                </li>
                            </ul>
                        </li>
                        <li :class="{active:$route.path == '/yonghuadd'}">
                            <router-link to="/yonghuadd">用户注册
                            </router-link>
                        </li>
                        <li :class="{active:$route.path == '/login'}">
                            <router-link to="/login">后台管理
                            </router-link>
                        </li>
                    </ul>
                </div>
            </e-container>
        </div>


    </div>
</template>
<style type="text/scss" scoped lang="scss">
    .jm-header {
        background: #0e77ca;

        .top-bar {
            padding: 0px;
            font-size: 14px;

            .cnt-account {
                float: right;
                padding: 6px 0px;
            }

            .cnt-account ul {
                margin: 0px;
            }

            .list-unstyled {
                padding-left: 0;
                list-style: none;
            }

            .cnt-account ul > li {
                display: inline-block;
                line-height: 12px;
                padding: 3px 12px 3px 7px;
                border-right: 1px solid hsla(0, 0%, 100%, .2);
            }

            .cnt-account ul > li:last-child {
                border: none;
                padding-right: 0px;
            }

            .cnt-account ul > li a {
                color: rgba(255, 255, 255, 0.8);
                padding: 0px;
                font-weight: 400;
                -webkit-transition: all 0.2s linear 0s;
                -moz-transition: all 0.2s linear 0s;
                -o-transition: all 0.2s linear 0s;
                transition: all 0.2s linear 0s;
            }

            .cnt-account ul > li a .icon {
                display: block;
                float: left;
                padding-right: 6px;
                font-size: 11px;
            }
        }

        .main-header {
            padding: 5px 0px 12px 0px;
        }

        .main-header .logo-holder {
            margin-top: 10px;
        }

        .logo a {
            font-size: 20px;
            color: #ffffff;
        }

        .main-header .top-search-holder .search-area {
            margin: 8px 0 0;
            background: #fff;
            border-radius: 2px;
        }

        .main-header .top-search-holder .search-area .search-field {
            border: medium none;
            -webkit-border-radius: 5px 0 0 5px;
            -moz-border-radius: 5px 0 0 5px;
            border-radius: 5px 0 0 5px;
            padding: 13px;
            width: calc(100% - 55px);
            outline: none;
        }

        .main-header .top-search-holder .search-area .search-button {
            border-radius: 0px 3px 3px 0px;
            display: inline-block;
            float: right;
            margin: 0px;
            padding: 12px 19px 12px;
            text-align: center;
            background-color: #fdd922;
            border: 1px solid #e0bc27;
        }

        .header-nav {
            background: #0f6cb2;
        }

        .nav-list {

        }

        .nav-list > ul {
            > li {
                float: left;
                height: 40px;
                line-height: 40px;
                position: relative;
                border-radius: 3px 3px 0 0;

                > a {
                    display: block;
                    padding: 0 15px;
                    font-size: 14px;
                    color: #f8f8f8;
                }

                &.active {
                    border-radius: 0;
                    background: #ffffff;

                    > a {
                        color: #888888;
                    }
                }

                &:hover {
                    background: #ffffff;

                    > a {
                        color: #888888;
                    }

                    > .nav-child {
                        visibility: visible;
                        opacity: 1;
                    }
                }

                > .nav-child {
                    position: absolute;
                    border-radius: 0 0 3px 3px;
                    width: 200%;
                    top: 40px;
                    left: 0px;
                    z-index: 999;
                    background: #ffffff;
                    padding-top: 10px;
                    visibility: hidden;
                    opacity: 0;
                    padding-bottom: 10px;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.4);

                    > li {
                        border-bottom: 1px #d0d0d0 dashed;

                        &:last-child {
                            border-bottom: none;
                        }

                        > a {
                            line-height: 30px;
                            display: block;
                            padding: 5px 10px 5px 20px;
                            color: #888888;
                        }
                    }
                }
            }
        }

    }

</style>
<script>
    import api from '@/api';
    import {extend} from '@/utils/extend';

    const setting = require('@/setting');

    export default {
        name: "v-header",
        data() {
            return {
                keyword: '',
                setting,
                listMenushangpinfenlei: [],
                listMenuzixunfenlei: [],
            }
        },
        watch: {},
        computed: {},
        methods: {
            searchKeyword() {
                var filter = {};
                filter[""] = this.keyword;
                this.$router.push({
                    path: '/',
                    query: filter
                });
            },
            logout() {
                this.$confirm('确定退出登录？', '确认信息').then(() => {
                    // 退出登录
                    this.$store.dispatch('user/logout');
                });
            },

            loadListMenu(module, target) {
                this.$post(api.search.all, {table: module, order: 'id desc'}).then(res => {
                    this[target] = res.data;
                });
            },

        },
        created() {
            this.loadListMenu('shangpinfenlei', 'listMenushangpinfenlei');
            this.loadListMenu('zixunfenlei', 'listMenuzixunfenlei');
        },
        mounted() {
        },
        destroyed() {
        }
    }
</script>
