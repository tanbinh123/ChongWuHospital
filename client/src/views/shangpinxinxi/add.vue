<template>
    <div class="shangpinxinxi-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                                <span> 添加商品信息</span>
                            </div>
            

            <el-form :model="form" ref="formModel" label-width="130px" status-icon validate-on-rule-change>
                                <el-form-item label="商品编号" prop="shangpinbianhao" :rules="[{required:true, message:'请填写商品编号'}]">
                                            <el-input placeholder="输入商品编号" style="width:250px;" v-model="form.shangpinbianhao" />                                    </el-form-item>

                                <el-form-item label="商品名称" prop="shangpinmingcheng" required :rules="[{required:true, message:'请填写商品名称'}]">
                                            <el-input placeholder="输入商品名称" style="width:450px;" v-model="form.shangpinmingcheng" />                                    </el-form-item>

                                <el-form-item label="分类" prop="fenlei">
                                            <el-select v-model="form.fenlei" >
<el-option v-for="m in shangpinfenleiList" :value="m.id" :label="m.fenlei"></el-option>
</el-select>                                    </el-form-item>

                                <el-form-item label="图片" prop="tupian">
                                            <e-upload-images v-model="form.tupian"></e-upload-images>                                    </el-form-item>

                                <el-form-item label="价格" prop="jiage" required :rules="[{required:true, message:'请填写价格'}, {validator:rule.checkNumber, message:'输入一个有效数字'}]">
                                            <el-input placeholder="输入价格" style="width:250px;" v-model="form.jiage" />                                    </el-form-item>

                                <el-form-item label="库存" prop="kucun" required :rules="[{required:true, message:'请填写库存'}, {validator:rule.checkNumber, message:'输入一个有效数字'}]">
                                            <el-input placeholder="输入库存" style="width:250px;" v-model="form.kucun" />                                    </el-form-item>

                                <el-form-item label="商品详情" prop="shangpinxiangqing">
                                            <e-editor v-model="form.shangpinxiangqing"></e-editor>                                    </el-form-item>

                                <el-form-item v-if="btnText">
                    <el-button type="primary" @click="submit">{{ btnText }}</el-button>
                </el-form-item>
            </el-form>

        </el-card>
    </div>
</template>
<style type="text/scss" scoped lang="scss">
.shangpinxinxi-add{

}
</style>
<script>
    import api from '@/api'
    import rule from '@/utils/rule'
    import { extend } from '@/utils/extend'

    
    export default {
        name:'shangpinxinxi-add',
        data() {
            return {
                                rule,
                loading:false,
                form:{
shangpinbianhao:rule.getID(),
                    shangpinmingcheng:'',
                    fenlei:'',
                    tupian:'',
                    jiage:'',
                    kucun:'',
                    shangpinxiangqing:'',

                                    
                },

                        shangpinfenleiList:[],
            
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

                    this.$post(api.shangpinxinxi.insert , form).then(res=>{
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
                this.$post(api.shangpinxinxi.create , {
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
