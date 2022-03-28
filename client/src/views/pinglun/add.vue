<template>
    <div class="pinglun-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                                <span> 添加评论</span>
                            </div>
            

            <el-form :model="form" ref="formModel" label-width="130px" status-icon validate-on-rule-change>
                                <el-form-item v-if="isRead" label="编号" prop="bianhao">
                                            {{  form.bianhao  }}                                    </el-form-item>

                                <el-form-item v-if="isRead" label="服务项目" prop="fuwuxiangmu">
                                            {{  form.fuwuxiangmu  }}                                    </el-form-item>

                                <el-form-item v-if="isRead" label="预约人" prop="yuyueren">
                                            {{  form.yuyueren  }}                                    </el-form-item>

                                <el-form-item label="评分" prop="pingfen">
                                            <el-select v-model="form.pingfen" ><el-option label="1分" value="1分"></el-option>
<el-option label="2分" value="2分"></el-option>
<el-option label="3分" value="3分"></el-option>
<el-option label="4分" value="4分"></el-option>
<el-option label="5分" value="5分"></el-option>
</el-select>                                    </el-form-item>

                                <el-form-item label="评论内容" prop="pinglunneirong">
                                            <el-input type="textarea" v-model="form.pinglunneirong"></el-input>                                    </el-form-item>

                                <el-form-item v-if="btnText">
                    <el-button type="primary" @click="submit">{{ btnText }}</el-button>
                </el-form-item>
            </el-form>

        </el-card>
    </div>
</template>
<style type="text/scss" scoped lang="scss">
.pinglun-add{

}
</style>
<script>
    import api from '@/api'
    import rule from '@/utils/rule'
    import { extend } from '@/utils/extend'

    
    export default {
        name:'pinglun-add',
        data() {
            return {
                                readMap:{},
                                rule,
                loading:false,
                form:{
                    bianhao:'',
                    fuwuxiangmu:'',
yuyueren:this.$store.state.user.session.username,                    pingfen:'',
                    pinglunneirong:'',

            fuwuyuyueid:0,
                        
                },

            
            }
        },
                watch: {
                    },
        props: {
            isRead:{
                type:Boolean,
                default:true
            },
            btnText:{
                type:String,
                default:'提交'
            },
                    },

        computed: {},
        methods: {
            submit(){
                this.$refs.formModel.validate().then(res=>{
                    if(this.loading)return;
                    this.loading = true;
                    var form = this.form;

                    this.$post(api.pinglun.insert , form).then(res=>{
                        this.loading = false;
                        if(res.code == api.code.OK){
                            this.$message.success('添加成功');
                            this.$emit('success' , res.data);
                            this.$refs.formModel.resetFields();
                                                        this.$router.go(-1);
                                                    }else{
                            this.$message.error(res.msg);
                        }
                    }).catch(err=>{
                        this.loading = false;
                        this.$message.error(err.message);
                    })

                }).catch(err=>{
                    console.log(err.message);
                })

            },
            loadInfo(){

                                var form = this.form;
                // 获取模块得数据
                this.loading = true;
                this.$post(api.pinglun.create , {
                    id:this.$route.query.id
                }).then(res=>{
                    this.loading = false;
                    if(res.code == api.code.OK){
                        extend(this , res.data);
                                                var readMap = res.data.readMap;
                        for (var i in form){
                            if(readMap[i] && i != 'id')
                            {
                                form[i] = res.data.readMap[i];
                            }
                        }
                        form.fuwuyuyueid = readMap.id;
                                            }else{
                        this.$message.error(res.msg);
                        this.$router.go(-1);
                    }
                }).catch(err=>{
                    this.$message.error(err.message);
                    this.$router.go(-1);
                });
                            },
                    },
        created() {
            this.loadInfo();
                    },
        mounted() {
                    },
        destroyed() {
                    }
    }
</script>
