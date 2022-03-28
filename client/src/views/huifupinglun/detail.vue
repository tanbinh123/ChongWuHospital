<template>
    
    <div class="huifupinglun-detail" v-loading="loading" ref="print">
        <el-page-header @back="goBack" content="详情页面"></el-page-header>
        <div class="admin-detail">

                        <div class="detail detail-text">
                <div class="detail-title">
                    编号：
                </div>
                <div class="detail-content">
                    {{ map.bianhao }}
                </div>
            </div>                        <div class="detail detail-longtext">
                <div class="detail-title">
                    服务项目：
                </div>
                <div class="detail-content">
                    {{ map.fuwuxiangmu }}
                </div>
            </div>                        <div class="detail detail-textuser">
                <div class="detail-title">
                    预约人：
                </div>
                <div class="detail-content">
                    {{ map.yuyueren }}
                </div>
            </div>                        <div class="detail detail-select">
                <div class="detail-title">
                    评分：
                </div>
                <div class="detail-content">
                    {{  map.pingfen  }}
                </div>
            </div>                        <div class="detail detail-textarea">
                <div class="detail-title">
                    评论内容：
                </div>
                <div class="detail-content">
                    {{ map.pinglunneirong }}
                </div>
            </div><div class="detail detail-textarea">
                <div class="detail-title">
                    回复内容：
                </div>
                <div class="detail-content">
                    {{ map.huifuneirong }}
                </div>
            </div>            
                                                            
        </div>
        <div class="mt10">
            <el-button type="default" class="hidePrint" @click="$router.go(-1)">
                返回
            </el-button>
            <el-button type="success" class="hidePrint" @click="$print">
                打印本页
            </el-button>
        </div>
    </div>
</template>
<style type="text/scss" scoped lang="scss">
.huifupinglun-detail{
    .admin-detail {
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
        .detail {
            width: 50%;
            padding: 5px;
            display: flex;
            margin-bottom: 10px;
            border-bottom: 1px solid #DEDEDE;
            .detail-title {
                width: 120px;
                text-align: right;
            }
            .detail-content {
                flex-grow: 1;
            }
        }
        .detail.detail-images {
            width: 100%;
            flex-wrap: wrap;
            .detail-title {
                display: none;
            }

            .detail-content {
                width: 100%;
                padding: 10px;
            }
        }
        .detail.detail-editor,.detail.detail-dataset  {
            width: 100%;
            flex-wrap: wrap;
            .detail-title {
                width: 100%;
                padding: 10px;
                margin-top: 10px;
                background: #9a0606;
                color: #ffffff;
                text-align: left;
            }
            .detail-content{
                padding: 10px;
            }
        }
    }
}
</style>
<script>
    import api from '@/api';
    import { extend } from '@/utils/extend';

    
    export default {
        data() {
            return {
                loading:false,
                map:{},

                            }
        },
                props:{
            id:{
                type:[String,Number],
                required:true
            },
                    },
        watch: {
            id:{
                handler(){
                    this.loadDetail();
                },
                immediate:true
            }
        },
        computed: {
                    },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            loadDetail(){
                if(this.loading) return;
                this.loading = true;
                this.$get(api.huifupinglun.detail , {
                    id:this.id
                }).then(res=>{
                    this.loading = false;
                    if(res.code == api.code.OK){
                        extend(this , res.data);
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
