<template>
    <div>
        <div class="message">{{msg}}</div>
    </div>
</template>
<style>
    .message{
        text-align: center;
        font-size: 20px;
    }
</style>
<script>
export default{
    data(){
        return{
            msg:'hello world!'
        }
    }
}
</script>