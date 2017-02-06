<template>
    <div class="props-demo">
        <div class="page__hd">
            <h1 class="page__title">组件</h1>
            <p class="page__desc">组件一些属性的用法</p>
        </div>
        <!--动态props-->
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
                <div class="weui-cell__bd">计算后输出：<child-secound :input-message="parentMsg"></child-secound></div>
            </div>
        </div>
        <!--自定义事件-->
        <div class="weui-cells__title">自定义事件</div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div>父组件监听事件的结果：一共点击{{total}}次</div>
            </div>
        </div>
        <button-component class="weui-btn weui-btn_primary"  @sonFun="addNum"></button-component>
        <button-component class="weui-btn weui-btn_primary" @sonFun="addNum"></button-component>
        <!--slot分发-->
        <div class="weui-cells__title">slot分发</div>
        <div class="slot-parent">
             <slot-component>
                 <h3 slot="header">头部信息</h3>
                 <p>内容1</p>
                 <p>内容2</p>
                 <h3 slot="footer">尾部信息</h3>
             </slot-component>
        </div>
    </div>
</template>
<script>
import buttonComponent from './demoChild/button';
import slotComponent from './demoChild/slot';

export default{
    data(){
        return{
            parentMsg:'hello!',
            total:0,
            num:2
        }
    },
    components:{
        'child':{
            props:['inputMessage'],
            template:'<span>{{inputMessage}}</span>'
        },
        'child-secound':{
            props:['inputMessage'],
            template:'<span>{{upperCase}}</span>',
            computed:{
                upperCase(){
                    return this.inputMessage.toUpperCase();
                }
            }    
        },
        'button-component':buttonComponent,
        'slot-component':slotComponent
    },
    methods:{
        addNum(){
            (this.total)++;
        }
    }
}
</script>
<style scoped>
.props-demo h2{
    padding: 20px;
}
.slot-parent{
    padding: 0 15px;
}
</style>