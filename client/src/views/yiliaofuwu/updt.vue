<template>
    <div class="yiliaofuwu-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                                    <el-page-header @back="$router.go(-1)" content="编辑医疗服务">
                    </el-page-header>
                            </div>
            

            <el-form :model="form" ref="formModel" label-width="130px" status-icon validate-on-rule-change>
                                <el-form-item label="编号" prop="bianhao" :rules="[{required:true, message:'请填写编号'}]">
                                            <el-input placeholder="输入编号" style="width:250px;" v-model="form.bianhao" />                                    </el-form-item>

                                <el-form-item label="服务项目" prop="fuwuxiangmu" required :rules="[{required:true, message:'请填写服务项目'}]">
                                            <el-input placeholder="输入服务项目" style="width:450px;" v-model="form.fuwuxiangmu" />                                    </el-form-item>

                                <el-form-item label="图片" prop="tupian">
                                            <e-upload-image v-model="form.tupian"></e-upload-image>                                    </el-form-item>

                                <el-form-item label="价格" prop="jiage" required :rules="[{required:true, message:'请填写价格'}, {validator:rule.checkNumber, message:'输入一个有效数字'}]">
                                            <el-input placeholder="输入价格" style="width:250px;" v-model="form.jiage" />                                    </el-form-item>

                                <el-form-item label="服务内容" prop="fuwuneirong">
                                            <e-editor v-model="form.fuwuneirong"></e-editor>                                    </el-form-item>

                                <el-form-item v-if="btnText">
                    <el-button type="primary" @click="submit">{{ btnText }}</el-button>
                </el-form-item>
            </el-form>

        </el-card>
    </div>
</template>
<style type="text/scss" scoped lang="scss">
.yiliaofuwu-add{

}
</style>
<script>
    import api from '@/api'
    import rule from '@/utils/rule'
    import { extend } from '@/utils/extend'

    
    export default {
        name:'yiliaofuwu-add',
        data() {
            return {
                                rule,
                loading:false,
                form:{
bianhao:rule.getID(),
                    fuwuxiangmu:'',
                    tupian:'',
                    jiage:'',
                    fuwuneirong:'',

                                    
                },

            
            }
        },
                watch: {
                        id: {
                handler() {
                    this.loadInfo();
                }
            }
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
                        id: {
                type: [String, Number],
                required: true
            },
                    },

        computed: {},
        methods: {
            submit(){
                this.$refs.formModel.validate().then(res=>{
                    if(this.loading)return;
                    this.loading = true;
                    var form = this.form;

                    this.$post(api.yiliaofuwu.update , form).then(res=>{
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

                                // 更新数据,获取数据
                this.loading = true;
                var form = this.form;
                this.$post(api.yiliaofuwu.edit , {
                    id:this.id
                }).then(res=>{
                    this.loading = false;
                    if(res.code == api.code.OK){
                        extend(this , res.data);
                        this.form = res.data.mmm;

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
