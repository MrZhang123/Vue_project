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
        <div class="shuffle-box">
            <transition-group
            class="shuffle-ul"
            name="shuffle"
            tag="ul"
            >
                <li
                class="shuffle-item"
                v-for="item of shuffleArr"
                :key="item.id"
                >{{item.value}}</li>
            </transition-group>
        </div>
        <a 
        href="javascript:;" 
        :class="[flag ? 'weui-btn_primary' : 'weui-btn_warn' , 'weui-btn']"
        @click="setIntervalStart">{{btnText}}</a>
    </div>
</template>
<style scoped>
.button-sp-area{
    text-align: center;
}
.shuffle-box,
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
.shuffle-box{
    height: 376px;
}
.shuffle-ul{
    text-align: center;
}
.shuffle-item{
    display: inline-block;
    width: 50px;
    height: 50px;
    font-size: 26px;
    padding: 20px;
    text-align: center;
    color: #1aad19;
    border: 2px solid #1aad19;
    margin-right: -2px;
    margin-top: -2px;
}
.shuffle-move{
    transition: all .5s ease;
}
</style>
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
            ],
            shuffleArr:[
                {'id':0,'value':'a'},
                {'id':1,'value':'b'},
                {'id':2,'value':'c'},
                {'id':3,'value':'d'},
                {'id':4,'value':'e'},
                {'id':5,'value':'f'},
                {'id':6,'value':'g'},
                {'id':7,'value':'h'},
                {'id':8,'value':'i'},
                {'id':9,'value':'j'},
                {'id':10,'value':'k'},
                {'id':11,'value':'l'},
                {'id':12,'value':'m'},
                {'id':13,'value':'n'},
                {'id':14,'value':'o'},
                {'id':15,'value':'p'}
            ],
            flag:true,
            btnText:'setIntervalStart',
            interval:''
        }
    },
    // mounted(){
    //     setInterval(this.shuffleFun,500);
    // },
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
        },
        shuffleFun(){
            this.shuffleArr = _.shuffle(this.shuffleArr);
        },
        setIntervalStart(){
            console.log(this.interval)
            if(this.flag){
                this.interval = setInterval(this.shuffleFun,500);
                
                this.flag = false;
                this.btnText = 'setIntervalEnd';
            }else{
                console.log(this.interval)
                clearInterval(this.interval);
                this.flag = true;
                this.btnText = 'setIntervalStart';
            }
        }
    },
    computed:{
        screenShowFont(){
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