<template>
    <div class="props-demo">
        <h4>props</h4>
        <div class="weui-cells__title">文本框</div>
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
            <div class="weui-cell weui-cell_access">
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
        }
    }
}
</script>