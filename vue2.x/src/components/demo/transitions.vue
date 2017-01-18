<template>
    <div class="transitions">
        <div class="page__hd">
            <h1 class="page__title">key的使用</h1>
            <p class="page__desc">根据不同的条件显示不同的数据</p>
        </div>
        <div class="screen-box">
            <transition name="fade" model="out-in">
                <div 
                class="screen"
                :key="screenShow">{{screenShowFont}}</div>
            </transition>
        </div>
        <div class="button-sp-area">
            <a 
            href="javascript:;"
            v-for="(btn,index) of btns"
            :class="btn.btnClass"
            @click="clickFun(index)">{{btn.btnName}}</a>
        </div>
        <div class="page__hd">
            <h1 class="page__title">transition-group</h1>
            <p class="page__desc">过渡列表的展示</p>
        </div>
    </div>
</template>
<script>
import _ from 'lodash';

export default{
    data(){
        return{
            screenShow:'empty',
            btns:[
                {btnName:'red',btnClass:'weui-btn weui-btn_mini weui-btn_warn'},
                {btnName:'green',btnClass:'weui-btn weui-btn_mini weui-btn_primary'},
                {btnName:'white',btnClass:'weui-btn weui-btn_mini weui-btn_default'}
            ]
        }
    },
    methods:{
        clickFun(index){
            switch(index){
                case 0 : 
                    this.screenShow = 're';
                    break;
                case 1 : 
                    this.screenShow = 'gr';
                    break;
                case 2 : 
                    this.screenShow = 'wh';
                    break;
                default:
                    this.screenShow = 'em';
            }
        }
    },
    computed:{
        screenShowFont(){
            console.log('test');
            switch(this.screenShow){
                case 're' :
                    return 'red1';
                    break;
                case 'gr' :
                    return 'green2';
                    break;
                case 'wh' :
                    return 'white3';
                    break;
                default : 
                    return 'empty0';            
            }
        }
    }
}
</script>
<style scoped>
.button-sp-area{
    text-align: center;
}
.screen-box{
    position: relative;
    width: 100%;
    height: 150px;
}
.screen{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 300px;
    height: 100px;
    border: 10px dashed #1aad19;
    line-height: 100px;
    text-align: center;
    font-size: 40px;
    color: #1aad19; 
}
</style>