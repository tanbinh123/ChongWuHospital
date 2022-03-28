<template>
    <div class="yuyuechuli-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                                    <el-page-header @back="$router.go(-1)" content="编辑预约处理">
                    </el-page-header>
                            </div>
            

            <el-form :model="form" ref="formModel" label-width="130px" status-icon validate-on-rule-change>
                                <el-form-item v-if="isRead" label="编号" prop="bianhao">
                                            {{  form.bianhao  }}                                    </el-form-item>

                                <el-form-item v-if="isRead" label="服务项目" prop="fuwuxiangmu">
                                            {{  form.fuwuxiangmu  }}                                    </el-form-item>

                                <el-form-item v-if="isRead" label="图片" prop="tupian">
                                            <e-img :src="form.tupian" style="max-width:120px" />                                    </el-form-item>

                                <el-form-item v-if="isRead" label="价格" prop="jiage" :rules="[{validator:rule.checkNumber, message:'输入一个有效数字'}]">
                                            {{  form.jiage  }}                                    </el-form-item>

                                <el-form-item v-if="isRead" label="预约人姓名" prop="yuyuerenxingming">
                                            {{  form.yuyuerenxingming  }}                                    </el-form-item>

                                <el-form-item v-if="isRead" label="联系方式" prop="lianxifangshi">
                                            {{  form.lianxifangshi  }}                                    </el-form-item>

                                <el-form-item v-if="isRead" label="预约时间" prop="yuyueshijian">
                                            {{  form.yuyueshijian  }}                                    </el-form-item>

                                <el-form-item v-if="isRead" label="预约人" prop="yuyueren">
                                            {{  form.yuyueren  }}                                    </el-form-item>

                                <el-form-item label="备注" prop="beizhu">
                                            <el-input type="textarea" v-model="form.beizhu"></el-input>                                    </el-form-item>

                                <el-form-item v-if="btnText">
                    <el-button type="primary" @click="submit">{{ btnText }}</el-button>
                </el-form-item>
            </el-form>

        </el-card>
    </div>
</template>
<style type="text/scss" scoped lang="scss">
.yuyuechuli-add{

}
</style>
<script>
    import api from '@/api'
    import rule from '@/utils/rule'
    import { extend } from '@/utils/extend'

    
    export default {
        name:'yuyuechuli-add',
        data() {
            return {
                                rule,
                loading:false,
                form:{
                    bianhao:'',
                    fuwuxiangmu:'',
                    tupian:'',
                    jiage:'',
                    yuyuerenxingming:'',
                    lianxifangshi:'',
                    yuyueshijian:'',
yuyueren:this.$store.state.user.session.username,                    beizhu:'',

            fuwuyuyueid:0,
                        
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

                    this.$post(api.yuyuechuli.update , form).then(res=>{
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

                                // 更新数据,获取数据
                this.loading = true;
                var form = this.form;
                this.$post(api.yuyuechuli.edit , {
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
