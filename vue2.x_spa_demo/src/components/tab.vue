<template>
    <div class="page tab">
        <div class="page__bd" style="height: 100%;">
            <div class="weui-tab">
                <div class="weui-navbar">
                    <div
                    v-for="(tab,index) of tabs"
                    @click="clickTab(index)"
                    :class="[index === selected ? 'weui-bar__item_on' : '' , 'weui-navbar__item' ]">{{tab.name}}</div>
                </div>
                <div class="weui-tab__panel">
                    <transition name="fade" mode="out-in">
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
        }
    }
}
</script>
<style scoped>
    
</style>