<template>
    <div class="gouwuche-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                                    <el-page-header @back="$router.go(-1)" content="编辑购物车">
                    </el-page-header>
                            </div>
            

            <el-form :model="form" ref="formModel" label-width="130px" status-icon validate-on-rule-change>
                                <el-form-item v-if="isRead" label="商品编号" prop="shangpinbianhao">
                                            {{  form.shangpinbianhao  }}                                    </el-form-item>

                                <el-form-item v-if="isRead" label="商品名称" prop="shangpinmingcheng">
                                            {{  form.shangpinmingcheng  }}                                    </el-form-item>

                                <el-form-item v-if="isRead" label="图片" prop="tupian">
                                            <e-img :src="form.tupian" type="list" style="max-width:120px"></e-img>                                    </el-form-item>

                                <el-form-item v-if="isRead" label="价格" prop="jiage" :rules="[{validator:rule.checkNumber, message:'输入一个有效数字'}]">
                                            {{  form.jiage  }}                                    </el-form-item>

                                <el-form-item label="购买数量" prop="goumaishuliang" required :rules="[{required:true, message:'请填写购买数量'}, {validator:rule.checkNumber, message:'输入一个有效数字'}, {validator:rule.checkMax, message:'库存不足', value:readMap.kucun}, {validator:rule.checkMin, message:'最小为1', value:1}]">
                                            <el-input placeholder="输入购买数量" style="width:250px;" v-model="form.goumaishuliang" />                                    </el-form-item>

                                <el-form-item label="购买人" prop="goumairen">
                                            <el-input v-model="form.goumairen" readonly style="width: 250px;"></el-input>                                    </el-form-item>

                                <el-form-item v-if="btnText">
                    <el-button type="primary" @click="submit">{{ btnText }}</el-button>
                </el-form-item>
            </el-form>

        </el-card>
    </div>
</template>
<style type="text/scss" scoped lang="scss">
.gouwuche-add{

}
</style>
<script>
    import api from '@/api'
    import rule from '@/utils/rule'
    import { extend } from '@/utils/extend'

    
    export default {
        name:'gouwuche-add',
        data() {
            return {
                readMap:{},
                                rule,
                loading:false,
                form:{
                    shangpinbianhao:'',
                    shangpinmingcheng:'',
                    tupian:'',
                    jiage:'',
                    goumaishuliang:'',
goumairen:this.$store.state.user.session.username,
            shangpinxinxiid:0,
                        
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

                    this.$post(api.gouwuche.update , form).then(res=>{
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
                this.$post(api.gouwuche.edit , {
                    id:this.id
                }).then(res=>{
                    this.loading = false;
                    if(res.code == api.code.OK){
                        extend(this , res.data);
                        this.form = res.data.mmm;
                        this.readMap = res.data.readMap; 
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
