<template>
    <div class="liuyanfankui-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                                <span> 添加留言反馈</span>
                            </div>
            

            <el-form :model="form" ref="formModel" label-width="130px" status-icon validate-on-rule-change>
                                <el-form-item label="姓名" prop="xingming" required :rules="[{required:true, message:'请填写姓名'}]">
                                            <el-input placeholder="输入姓名" style="width:250px;" v-model="form.xingming" />                                    </el-form-item>

                                <el-form-item label="联系电话" prop="lianxidianhua" required :rules="[{required:true, message:'请填写联系电话'}]">
                                            <el-input placeholder="输入联系电话" style="width:250px;" v-model="form.lianxidianhua" />                                    </el-form-item>

                                <el-form-item label="反馈内容" prop="fankuineirong" required :rules="[{required:true, message:'请填写反馈内容'}]">
                                            <el-input type="textarea" v-model="form.fankuineirong"></el-input>                                    </el-form-item>

                                <el-form-item label="留言人" prop="liuyanren">
                                            <el-input v-model="form.liuyanren" readonly style="width: 250px;"></el-input>                                    </el-form-item>

                                <el-form-item v-if="btnText">
                    <el-button type="primary" @click="submit">{{ btnText }}</el-button>
                </el-form-item>
            </el-form>

        </el-card>
    </div>
</template>
<style type="text/scss" scoped lang="scss">
.liuyanfankui-add{

}
</style>
<script>
    import api from '@/api'
    import rule from '@/utils/rule'
    import { extend } from '@/utils/extend'

    
    export default {
        name:'liuyanfankui-add',
        data() {
            return {
                                rule,
                loading:false,
                form:{
xingming:this.$store.state.user.session.xingming,
lianxidianhua:this.$store.state.user.session.shouji,
                    fankuineirong:'',
liuyanren:this.$store.state.user.session.username,
                                    
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

                    this.$post(api.liuyanfankui.insert , form).then(res=>{
                        this.loading = false;
                        if(res.code == api.code.OK){
                            this.$message.success('添加成功');
                            this.$emit('success' , res.data);
                            this.$refs.formModel.resetFields();
                                                        this.loadInfo();
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
                this.$post(api.liuyanfankui.create , {
                    id:this.$route.query.id
                }).then(res=>{
                    this.loading = false;
                    if(res.code == api.code.OK){
                        extend(this , res.data);
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
