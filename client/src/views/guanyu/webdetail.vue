<template>
    <div class="guanyu-detail" v-loading="loading">
        <div>
            <e-container>
                <div style="margin:30px 0 0 0;background-color:#FFFFFF;box-shadow:0px 0px 8px 3px #8B8B8B">
                    <div>
                        <div class="common-title" style="margin-top: 4em;">
                            <p>
                                <i></i>
                                <i></i>
                            </p>
                        </div>
                        <div class="news_show">
            <span class="show_t" v-html="map.biaoti">
            </span>
                            <span class="fa_time">
                                </span>
                            <div v-html="map.neirong"></div>

                        </div>
                    </div>


                </div>

            </e-container>
        </div>
    </div>
</template>
<style type="text/scss" scoped lang="scss">
</style>
<script>
    import api from '@/api';
    import {extend} from '@/utils/extend';

    export default {
        data() {
            return {
                loading: false,   // 加载
                isCollect: false, // 是否已经收藏
                map: {
                    biaoti: '',
                    neirong: '',
                },
                prev: {},
                next: {},
            }
        },
        props: {
            id: {
                type: [String, Number],
                required: true
            }
        },
        watch: {
            id: {
                handler() {
                    this.loadDetail();
                },
                immediate: true
            },
        },
        computed: {},
        methods: {
            loadDetail() {
                if (this.loading) return;
                this.loading = true;
                this.$get(api.guanyu.webdetail, {
                    id: this.id
                }).then(res => {
                    this.loading = false;
                    if (res.code == api.code.OK) {
                        extend(this, res.data);
                    } else {
                        this.$message.error(res.msg);
                    }
                }).catch(err => {
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
