<template>
    <div class="e-container">
        <slot></slot>
    </div>
</template>
<style type="text/scss" lang="scss">
.e-container{
    width: 1200px;
    margin:0 auto;
}
</style>
<script>
    export default {
        name: "e-container",
    }
</script>
