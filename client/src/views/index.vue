<template>
    <div v-loading="loading">
        <div>

            <el-carousel indicator-position="outside" height="400px">
                <el-carousel-item v-for="item in bhtList" :key="item.id">
                    <div style="background-size: cover" @click="$goto(item.url)"
                         :style="{'background-image': 'url('+item.image+')',width:'100%', height: '400px'}">
                    </div>
                </el-carousel-item>
            </el-carousel>


        </div>
        <div>
            <e-container>
                <div style="margin:30px 0 0 0;background-color:#FFFFFF;box-shadow:0px 0px 8px 3px #848484">
                    <e-module-sn-title title="医疗服务">
                        <div class="v2-case__box clearfix">

                            <el-row :gutter="20">
                                <el-col :md="6" v-for="r in yiliaofuwulist1">
                                    <div class="v2-list">
                                        <router-link :to="{path:'/yiliaofuwudetail',query:{id:r.id}}"
                                                     class="v2-case__box__img">
                                            <e-img-box :src="r.tupian"></e-img-box>
                                        </router-link>
                                        <router-link :to="{path:'/yiliaofuwudetail',query:{id:r.id}}"
                                                     class="v2-case__h2">
                                            <h2>
                                                <div>
                                                    {{ r.fuwuxiangmu }}
                                                </div>
                                                <i></i>
                                            </h2>
                                            <p v-text="$substr(r.fuwuneirong,80)"></p>
                                        </router-link>
                                    </div>
                                </el-col>
                            </el-row>

                        </div>
                    </e-module-sn-title>

                </div>

            </e-container>
        </div>
        <div>
            <e-container>
                <div style="margin:30px 0 0 0;background-color:#FFFFFF;box-shadow:0px 0px 8px 3px #7D7D7D">
                    <e-module-sn-title title="周边商品">
                        <div class="paoche">

                            <el-row class="ul_model" :gutter="20">
                                <el-col :md="6" class="li_model" :key="r.id" v-for="r in shangpinxinxilist2">
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
                                                <p style="text-align: center">￥ {{ r.jiage }} </p>
                                            </div>

                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </e-module-sn-title>

                </div>

            </e-container>
        </div>
        <div>
            <e-container>
                <el-row :gutter="15">
                    <el-col :md="12">
                        <div style="margin:30px 0 0 0;background-color:#FFFFFF;box-shadow:0px 0px 8px 3px #8C8C8C">
                            <e-module-sn-title title="日常分享">
                                <div class="scck clearfix">
                                    <el-row :gutter="20">
                                        <el-col :md="12" class="card" v-for="r in fenxiangqushilist3">
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
                            </e-module-sn-title>

                        </div>
                    </el-col>
                    <el-col :md="12">
                        <div style="margin:30px 0 0 0;background-color:#FFFFFF;box-shadow:0px 0px 8px 3px #858585">
                            <e-module-sn-title title="宠物资讯">


                                <div class="">
                                    <e-news-list v-for="r in chongwuzixunlist4" :key="r.id"
                                                 :to="'/chongwuzixundetail?id='+r.id"
                                                 :title="r.biaoti"
                                                 :description="r.neirong"
                                                 :len="30"
                                                 :image="r.tupian"

                                    >
                                        <span>分类: <e-select-view module="zixunfenlei" :value="r.fenlei" select="id"
                                                                 show="fenleimingcheng"></e-select-view></span>
                                        <span>添加人:{{ r.tianjiaren }}</span>
                                        <span>点击率:{{ r.dianjilv }}</span>

                                    </e-news-list>
                                </div>


                            </e-module-sn-title>

                        </div>
                    </el-col>

                </el-row>


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
                loading: false,
                bhtList: [],
                yiliaofuwulist1: [],
                shangpinxinxilist2: [],
                fenxiangqushilist3: [],
                chongwuzixunlist4: [],
            }
        },
        watch: {},
        computed: {},
        methods: {
            loadPageData() {
                if (this.loading) return;
                this.loading = true;
                this.$get('/index').then(res => {
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
            this.loadPageData();
        },
        mounted() {
        },
        destroyed() {
        }
    }
</script>
