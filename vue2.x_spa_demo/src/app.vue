<template>
<div class="page">
    <router-view></router-view>
    <div class="page__bd" style="height: 100%;">
        <div class="weui-tab">
            <div class="weui-tabbar"> 
                <!--<a href="javascript:;" class="weui-tabbar__item weui-bar__item_on">-->
                <router-link to="aa">
                    <p class="weui-tabbar__label">通讯录</p>
                </router-link>
                    
                <!--</a>-->
                <router-link to="bb">
                    <p class="weui-tabbar__label">发现</p>
                </router-link>
                <a href="javascript:;" class="weui-tabbar__item">
                    <p class="weui-tabbar__label">通讯录</p>
                </a>
                <a href="javascript:;" class="weui-tabbar__item">
                    <p class="weui-tabbar__label">发现</p>
                </a>
                <a href="javascript:;" class="weui-tabbar__item">
                    <p class="weui-tabbar__label">我</p>
                </a>
            </div>
        </div>
    </div>
</div>
</template>
<style scoped>
    .weui-tabbar{
        position: fixed;
        left: 0;
        bottom: 0;
    }
</style>