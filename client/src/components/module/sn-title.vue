<template>
    <div class="subtitle-sn-title">
        <div class="sn-title">
            <div class="more">
                <a href="javascript:;">
                More
                </a>
            </div>
            {{title}}
        </div>
        <div class="sn-content">
            <slot></slot>
        </div>
    </div>
</template>
<style type="text/scss" scoped lang="scss">
    .subtitle-sn-title{
        .sn-title{
            margin-top: 0;
            color: #3a3d45;
            font-size: 18px;
            z-index: 1;
            position: relative;
            padding-bottom: 10px;
            margin-bottom: 10px;
            border-bottom: 2px solid #DEDEDE;
            .more{
                font-size: 12px;
                color: #8e8e8e;
                float: right;
                margin-right: 8px;
            }
        }
    }

</style>
<script>

    export default {
        name: "e-module-sn-title",
        data() {
            return {

            }
        },
        props:{
            title:String
        },
        watch: {},
        computed: {

        },
        methods: {},
        created() {
        },
        mounted() {
        },
        destroyed() {
        }
    }
</script>
