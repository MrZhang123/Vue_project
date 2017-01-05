<template>
<div class="page">
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
    <div class="page__bd" style="height: 100%;">
        <div class="weui-tab">
            <div class="weui-tabbar"> 
                <router-link 
                v-for="tabbarName of tabbarNames"
                :to="tabbarName.name"
                class="weui-tabbar__item">
                    <p class="weui-tabbar__label">{{tabbarName.name}}</p>
                </router-link>
                <!--weui-bar__item_on-->
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            tabbarNames:[
                {name:'ZY'},
                {name:'JS'},
                {name:'CSS'}
            ]
        }
    }
}
</script>
<style scoped>
    .weui-tabbar{
        position: fixed;
        left: 0;
        bottom: 0;
    }
    .weui-tabbar__item{
        padding: 10px 0;
        cursor: pointer;
    }
    .weui-tabbar__item .weui-tabbar__label{
        font-size: 18px;
    }
</style>