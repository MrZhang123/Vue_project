<template>
    <div class="btn">
        <a 
        class="weui-btn weui-btn_primary" 
        href="javascript:;"
        @click="clickFun">点击了{{counter}}次</a>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                counter:0
            }
        },
        methods:{
            clickFun(){
                return (this.counter)++;
                this.$emit('clickFun');
            }
        }
    }
</script>