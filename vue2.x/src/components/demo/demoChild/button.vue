<template>
    <a 
    href="javascript:;"
    @click="sonFun">点击了{{counter}}次</a>
</template>
<script>
    export default{
        data(){
            return{
                counter:0
            }
        },
        methods:{
            sonFun(){
                this.$emit('sonFun');
                return (this.counter)++;
            }
        }
    }
</script>