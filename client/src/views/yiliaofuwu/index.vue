<template>
    <div v-loading="loading">
        <div>
<e-container>
            <div  style="margin:30px 0 0 0;background-color:#FFFFFF;box-shadow:0px 0px 8px 3px #848484">
<e-module-sn-title title="医疗服务列表">
    <div class="v2-case__box clearfix">
                <div style="margin-bottom: 20px">
            <form action="javascript:;" @submit="searchSubmit" class="form-search">
    <table class="jd-search">
        <tbody>
                    <tr>
                <td class="label">
                    服务项目                </td>
                <td>
                                            <el-input
                                type="text" style="width: 150px"
                                v-model="search.fuwuxiangmu"
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
        <el-col :md="6" v-for="r in list">
            <div class="v2-list">
                <router-link :to="{path:'/yiliaofuwudetail',query:{id:r.id}}" class="v2-case__box__img">
                    <e-img-box :src="r.tupian"></e-img-box>
                </router-link>
                <router-link :to="{path:'/yiliaofuwudetail',query:{id:r.id}}" class="v2-case__h2">
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
</div>    </div>
</template>
<style type="text/scss" scoped lang="scss">
    </style>
<script>
    import api from '@/api';
    import { extend } from '@/utils/extend';
    import objectDiff from 'objectdiff';

    
    /**
     * 后台列表页面
     */
    export default {
        data() {
            return {
                loading:false,
                list:[],
                search:{

                    
                                                                bianhao:'',
                    
                                                                fuwuxiangmu:'',
                    
                                                                tupian:'',
                    
                                                            jiage_start:'',
                    jiage_end:'',
                    
                                                            yiyuyuerenshu_start:'',
                    yiyuyuerenshu_end:'',
                    
                                                                fuwuneirong:'',
                    
                                    },
                page:1, // 当前页
                pagesize:12, // 页大小
                totalCount:0, // 总行数
                total:{},

                        }
        },
        watch: {
                    },
        computed: {
                    },
                methods: {
            searchSubmit(){
                this.loadList(1);
            },
            loadList( page ){
                // 防止重新点加载列表
                if(this.loading)return;
                this.loading = true;
                this.page = page;
                // 筛选条件
                var filter = extend(true , {} , this.search , {page:page+"", pagesize: this.pagesize+""});
                var diff = objectDiff.diff(filter, this.$route.query);
                if (diff.changed != 'equal') { // 筛选的条件不一致则更新链接
                    this.$router.replace({  // 更新query
                        path: this.$route.path,
                        query: filter
                    });
                }
                this.$post(api.yiliaofuwu.weblist , filter).then(res=>{
                    this.loading = false;
                    if(res.code == api.code.OK)
                    {
                        extend(this , res.data);
                    }else{
                        this.$message.error(res.msg);
                    }
                }).catch(err=>{
                    this.loading = false;
                    this.$message.error(err.message);
                });
            },
                        selectRadio(target,name){
    this.search[target] = name;
    this.searchSubmit(1);
},
                    },
        beforeRouteUpdate(to,form,next){
            var search = extend(this.search , to.query)
            if(search.page)
            {
                this.page = Math.floor(to.query.page)
                delete search.page
            }
            if(search.pagesize)
            {
                this.pagesize = Math.floor(to.query.pagesize)
                delete search.pagesize
            }
            this.loadList(1);
            next();
        },
        created() {
            var search = extend(this.search , this.$route.query)
            if(search.page)
            {
                this.page = Math.floor(this.$route.query.page)
                delete search.page
            }
            if(search.pagesize)
            {
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
