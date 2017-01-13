<template>
    <div class="props-demo">
        
        <div class="page__hd">
            <h1 class="page__title">组件</h1>
            <p class="page__desc">组件一些属性的用法</p>
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
        
        <div class="weui-cells__title">自定义事件</div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div>父组件监听事件的结果：一共点击{{total}}次</div>
            </div>
        </div>
        <button-component @clickFun="addNum"></button-component>
    </div>
</template>
<script>
import buttonComponent from './button';

export default{
    data(){
        return{
            parentMsg:'hello!',
            total:0,
            num:2
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
        },
        'button-component':buttonComponent
    },
    methods:{
        addNum(){
            return this.total+1;
        }
    }
}
</script>
<style scoped>
.props-demo h2{
    padding: 20px;
}
</style>