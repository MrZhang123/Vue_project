<template>
    <div class="tab tab-1">
        <div class="page__bd">
            <div class="weui-cells">
                <router-link
                class="weui-cell weui-cell_access"
                v-for="demo of demos"
                :to="demo.demoLink"
                >
                    <div class="weui-cell__bd">
                        <span style="vertical-align: middle">{{demo.demoName}}</span>
                    </div>
                    <div class="weui-cell__ft"></div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            demos:[
                {demoName:'组件',demoLink:'components'},
                {demoName:'过渡效果',demoLink:'transitions'},
                {demoName:'axios的简单实用',demoLink:'axios-use'},
                {demoName:'Render函数的使用',demoLink:'render'}
            ]
        }
    }
}
</script>
<style scoped>
.weui-cells{
    margin: 0;
}
</style>