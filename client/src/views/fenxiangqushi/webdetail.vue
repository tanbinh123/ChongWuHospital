<template>
    <div class="fenxiangqushi-detail" v-loading="loading">
        <div>
<e-container>
            <div  style="margin:30px 0 0 0;background-color:#FFFFFF;box-shadow:0px 0px 8px 3px #808080">
<e-module-sn-title title="日常分享详情">
    <div>
    <div class="common-title" style="margin-top: 4em;">
        <p>
            <i></i>
            <i></i>
        </p>
    </div>
    <div class="news_show">
            <span class="show_t" v-html="map.biaoti">
            </span>
        <span class="fa_time">
                                    分享人:{{ map.fenxiangren }} &nbsp;&nbsp;
                                </span>
        <div v-html="map.neirong"></div>
        <div class="s_x clearfix">
            
            <template v-if="prev.id">
                <router-link :to="'fenxiangqushidetail?id='+prev.id" class="s_prev">
                    上一篇：<span v-html="prev.biaoti"></span>
                </router-link>
            </template>
            <template v-else>
                <a href="javascript:;" class="s_prev">上一篇：没有了</a>
            </template>
            
            <template v-if="next.id">
                <router-link :to="'/fenxiangqushidetail?id='+next.id" class="x_next">
                    下一篇：<span v-html="next.biaoti"></span>
                </router-link>
            </template>
            <template v-else>
                <a href="javascript:;" class="x_next">下一篇：没有了</a>
            </template>
        </div>
    </div>
</div>


</e-module-sn-title>

</div>    

</e-container>
</div>    </div>
</template>
<style type="text/scss" scoped lang="scss">
    </style>
<script>
    import api from '@/api';
    import { extend } from '@/utils/extend';
        export default {
        data() {
            return {
                loading:false,   // 加载
                                isCollect:false, // 是否已经收藏
                                map:{
                        biaoti:'',
                        tupian:'',
                        neirong:'',
                        fenxiangren:'',
                            },
                                prev:{},
                                next:{},
                            }
        },
                props:{
            id:{
                type:[String,Number],
                required:true
            }
        },
        watch: {
            id:{
                handler(){
                    this.loadDetail();
                },
                immediate:true
            },
                    },
        computed: {
                    },
        methods: {
            loadDetail(){
                if(this.loading) return;
                this.loading = true;
                this.$get(api.fenxiangqushi.webdetail , {
                    id:this.id
                }).then(res=>{
                    this.loading = false;
                    if(res.code == api.code.OK){
                        extend(this,res.data);
                    }else{
                        this.$message.error(res.msg);
                    }
                }).catch(err=>{
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
