<template>
<div class="page">
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
    <div class="page__bd" style="height: 100%;">
        <div class="weui-tab">
            
            <div class="weui-tabbar"> 
                <router-link 
                v-for="(tabbarName,index) of tabbarNames"
                :to="tabbarName.tabLink"
                @click.native="clickFun(index)"
                class="weui-tabbar__item"
                active-class>
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
                {name:'demo',tabLink:'tab'},
                {name:'zhihu',tabLink:'zhihu'},
                {name:'CSS',tabLink:'css'}
            ],
        }
    },
    methods:{
        clickFun(index){
            console.log(index);
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
    .weui-navbar{
        position: fixed;
        left: 0;
        top: 0;
    }
    .weui-tabbar__item{
        padding: 10px 0;
        cursor: pointer;
    }
    .weui-navbar__item,
    .weui-tabbar__item .weui-tabbar__label{
        font-size: 18px;
    }
    .router-link-active{
        background-color: #EAEAEA;
    }
    .router-link-active>p{
        color: #09BB07;
    }
</style>