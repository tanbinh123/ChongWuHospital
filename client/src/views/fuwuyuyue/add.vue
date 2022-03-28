<template>
    <div class="fuwuyuyue-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                                <span> 添加服务预约</span>
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

                                <el-form-item label="预约人姓名" prop="yuyuerenxingming" required :rules="[{required:true, message:'请填写预约人姓名'}]">
                                            <el-input placeholder="输入预约人姓名" style="width:250px;" v-model="form.yuyuerenxingming" />                                    </el-form-item>

                                <el-form-item label="联系方式" prop="lianxifangshi" required :rules="[{required:true, message:'请填写联系方式'}, {validator:rule.checkPhone, message:'请输入正确手机号码'}]">
                                            <el-input placeholder="输入联系方式" style="width:250px;" v-model="form.lianxifangshi" />                                    </el-form-item>

                                <el-form-item label="预约时间" prop="yuyueshijian" required :rules="[{required:true, message:'请填写预约时间'}]">
                                            <el-date-picker
          v-model="form.yuyueshijian"
          type="datetime"
          :editable="false"
          value-format="yyyy-MM-dd HH:mm:ss"
          placeholder="选择日期">
        </el-date-picker>                                    </el-form-item>

                                <el-form-item label="预约人" prop="yuyueren">
                                            <el-input v-model="form.yuyueren" readonly style="width: 250px;"></el-input>                                    </el-form-item>

                                <el-form-item v-if="btnText">
                    <el-button type="primary" @click="submit">{{ btnText }}</el-button>
                </el-form-item>
            </el-form>

        </el-card>
    </div>
</template>
<style type="text/scss" scoped lang="scss">
.fuwuyuyue-add{

}
</style>
<script>
    import api from '@/api'
    import rule from '@/utils/rule'
    import { extend } from '@/utils/extend'

    
    export default {
        name:'fuwuyuyue-add',
        data() {
            return {
                                readMap:{},
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
yuyuezhuangtai:'待处理',
yuyueren:this.$store.state.user.session.username,
            yiliaofuwuid:0,
                        
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

                    this.$post(api.fuwuyuyue.insert , form).then(res=>{
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
                this.$post(api.fuwuyuyue.create , {
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
                        form.yiliaofuwuid = readMap.id;
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
