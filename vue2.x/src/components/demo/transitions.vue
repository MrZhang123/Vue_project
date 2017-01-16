<template>
    <div class="transitions">
        <div class="page__hd">
            <h1 class="page__title">过渡</h1>
            <p class="page__desc">根据不同的条件显示不同的数据</p>
        </div>
        <transition>
            <div 
            class="screen"
            :key="">

            </div>
        </transition>
        <div class="button-sp-area">
            <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">按钮</a>
            <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_default">按钮</a>
            <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_warn">按钮</a>
        </div>
    </div>
</template>
<style scoped>
    .button-sp-area{
        text-align: center;
    }
</style>