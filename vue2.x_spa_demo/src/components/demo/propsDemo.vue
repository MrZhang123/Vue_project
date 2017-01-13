<template>
    <div class="props-demo">
        <div class="page__hd">
            <h1 class="page__title">props</h1>
            <p class="page__desc">props的一些用法</p>
        </div>
        <div class="weui-cells__title">动态props</div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <input 
                    class="weui-input" 
                    type="text" 
                    placeholder="请输入"
                    v-model="parentMsg">
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">普通输出：<child :input-message="parentMsg"></child></div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">计算后输出：<child-secound :input-message="parentMsg" ref="childSecound"></child-secound></div>
            </div>
        </div>
        <div class="weui-cells__title">单向数据流</div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <input 
                    class="weui-input" 
                    type="text" 
                    placeholder="请输入"
                    v-model="parentMsg">
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">输出：<child :input-message="parentMsg"></child></div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            parentMsg:'hello!'
        }
    },
    components:{
        child:{
            props:['inputMessage'],
            template:'<span>{{inputMessage}}</span>'
        },
        'child-secound':{
            props:['inputMessage'],
            template:'<span>{{lowerCase}}</span>',
            computed:{
                lowerCase(){
                    return this.$refs;
                    // return this.inputMessage.toLowerCase();
                }
            }    
        }
        
    },
}
</script>
<style scoped>
.props-demo h2{
    padding: 20px;
}
</style>