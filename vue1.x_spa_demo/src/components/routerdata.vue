<template>
    <div class="routerdata">
        <div class="hd" style="height: 100%;">
            <h1 class="page_title">Vue</h1>
            <p class="page_desc">利用路由实现tab切换并传参数</p>
        </div>
        <div class="weui_tab">
            <ul class="weui_navbar">
                <li class="weui_navbar_item"
                    v-link="{path:'/routerdata'}" @click="random">Vuejs</li>
                <li class="weui_navbar_item" v-link="{path:'/routerdata/tab2'}">VueTab</li>
            </ul>
            <div class="weui_tab_bd">
                <router-view :message="msg"></router-view>
            </div>
        </div>
    </div>
</template>
<style scoped>
.weui_tab_bd{
    width:100%;
    height:200px;
}
</style>
<script>
    export default{
        data(){
            return{
                msg:''
            }
        },
        methods:{
            random(){
                this.msg=Math.random();
            }
        }
    }
</script>
