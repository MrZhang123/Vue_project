<template>
    <div class="tab-1">
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
                {demoName:'Props传递数据',demoLink:'propsDemo'}
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