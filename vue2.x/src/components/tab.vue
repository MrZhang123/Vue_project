<template>
    <div class="tab-all">
        <div class="page__bd" style="height: 100%;">
            <div class="weui-tab">
                <div class="weui-navbar">
                    <div
                    v-for="(tab,index) of tabs"
                    @click="clickTab(index)"
                    :class="[index === selected ? 'weui-bar__item_on' : '' , 'weui-navbar__item' ]">{{tab.name}}</div>
                </div>
                <div class="weui-tab__panel">
                    <transition 
                    name="fade-left" 
                    model="out-in"
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"

                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                    >
                        <component :is="currentView"></component>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import tab_1 from './tab/tab_1';
import tab_2 from './tab/tab_2';

export default{
    data(){
        return{
            tabs:[
                {name:'选项一'},
                {name:'选项二'}
            ],
            currentView:'view_0',
            selected:0
        }
    },
    components:{
        'view_0':tab_1,
        'view_1':tab_2
    },
    methods:{
        clickTab(index){
            this.selected = index;
            this.currentView = `view_${index}`;
        },
        /*测试事件发生顺序*/
        beforeEnter(el){
            console.log('beforeEnter');
        },
        enter(){
            console.log('enter');
        },
        afterEnter(){
            console.log('afterEnter');
        },
        enterCancelled(){
            console.log('enterCancelled');
        },
        beforeLeave(){
            console.log('beforeLeave');
        },
        leave(){
            console.log('leave');
        },
        afterLeave(){
            console.log('afterLeave');
        },
        leaveCancelled(){
            console.log('leaveCancelled');
        }
    }
}
</script>
<style scoped>
.weui-tab__panel{
    position: relative;
    height: 600px;
}
.tab{
    width: 100%;
    position: absolute;
    z-index: 99;
}
</style>