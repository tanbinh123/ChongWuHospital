<template>
    <div class="chongzhi-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                                <span> 添加充值</span>
                            </div>
            

            <el-form :model="form" ref="formModel" label-width="130px" status-icon validate-on-rule-change>
                                <el-form-item v-if="isRead" label="用户名" prop="yonghuming">
                                            {{  form.yonghuming  }}                                    </el-form-item>

                                <el-form-item v-if="isRead" label="姓名" prop="xingming">
                                            {{  form.xingming  }}                                    </el-form-item>

                                <el-form-item label="充值金额" prop="chongzhijine" required :rules="[{required:true, message:'请填写充值金额'}, {validator:rule.checkNumber, message:'输入一个有效数字'}]">
                                            <el-input placeholder="输入充值金额" style="width:250px;" v-model="form.chongzhijine" />                                    </el-form-item>

                                <el-form-item label="充值人" prop="chongzhiren">
                                            <el-input v-model="form.chongzhiren" readonly style="width: 250px;"></el-input>                                    </el-form-item>

                                <el-form-item v-if="btnText">
                    <el-button type="primary" @click="submit">{{ btnText }}</el-button>
                </el-form-item>
            </el-form>

        </el-card>
    </div>
</template>
<style type="text/scss" scoped lang="scss">
.chongzhi-add{

}
</style>
<script>
    import api from '@/api'
    import rule from '@/utils/rule'
    import { extend } from '@/utils/extend'

    
    export default {
        name:'chongzhi-add',
        data() {
            return {
                                readMap:{},
                                rule,
                loading:false,
                form:{
                    yonghuming:'',
                    xingming:'',
                    chongzhijine:'',
chongzhiren:this.$store.state.user.session.username,
            yonghuid:0,
                        
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

                    this.$post(api.chongzhi.insert , form).then(res=>{
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
                this.$post(api.chongzhi.create , {
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
                        form.yonghuid = readMap.id;
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
