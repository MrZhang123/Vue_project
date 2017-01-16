<template>
<div class="home">
    <div class="bd" style="height: 100%;">
        <div class="weui_tab">
            <ul class="weui_navbar">
                <li class="weui_navbar_item"                    
                    v-for="tab in tabs"
                    :class="{'weui_bar_item_on':$index===selected}"
                    @click="choose($index)">{{tab.tabName}}</li>
            </ul>
            <div class="weui_tab_bd">
                <component :is="currentView" transition="fade" transition-mode="out-in"></component>
            </div>
        </div>
    </div>      
</div>
</template>
<script>
import  tab_1 from './tab/tab_1.vue';
import  tab_2 from './tab/tab_2.vue';
export default{
    data(){
        return{
            tabs:[
                {tabName:'Vuejs'},
                {tabName:'VueTab'}
            ],
            selected:0,
            currentView:'view_0'
        }
    },
    components:{
        'view_0':tab_1,
        'view_1':tab_2
    },
    methods:{
        choose(index) {
            this.selected=index;
            this.currentView='view_'+index;
        }
    },
    route:{
        data() {
            /*每次切换路由，在渲染出页面前都会执行*/
        }
    }
}
</script>