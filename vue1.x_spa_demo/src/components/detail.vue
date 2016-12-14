<template>
    <div class="detail">
        <div class="hd">
            <h1 class="page_title" v-if="Math.random()>0.5">详情</h1>
            <h1 class="page_title" v-else>不知道写啥</h1>
        </div>
        <div class="bd">
            <div class="weui_panel weui_panel_access">
                <div class="weui_panel_bd">
                    <div class="weui_cell">
                        <div class="weui_cell_bd weui_cell_primary" v-if="Math.random()>0.5">赵雷</div>
                        <div class="weui_cell_bd weui_cell_primary" v-else>李志</div>

                        <div class="weui_cell_ft">{{first}}</div>
                    </div>

                    <div class="weui_cell">
                        <div class="weui_cell_bd weui_cell_primary">楼上会变</div>
                        <div class="weui_cell_ft">{{secound}}</div>
                    </div>

                </div>
            </div>
            <div class="weui_btn_area">
                <a class="weui_btn weui_btn_primary" id="showTooltips" v-link="{path:'/form',activeClass:''}">点击跳转</a>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            first:'梵高先生',
            secound:'啊偶'
        }
    },
    computed:{
        /*这样就可以实现多个条件下显示不同的文字*/
        first(){
            if(Math.random()>0.5){
                return '梵高先生'
            }else {
                return '返回某个'
            }
        }
    }
}
</script>