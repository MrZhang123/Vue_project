<template>
<div class="list">
    <div class="hd">
        <h1 class="page_title">Vue</h1>
        <p class="page_desc">Vue的一些demo</p>
    </div>
    <div class="bd">
        <div class="weui_cells_title">Demo</div>
        <div class="weui_cells weui_cells_access">
            <a class="weui_cell" v-link="{path:'/comDemo' , activeClass:'active'}">
                <span class="weui_cell_bd weui_cell_primary">组件通信</span>
                <span class="weui_cell_ft"></span>
            </a>
            <a class="weui_cell" v-link="{path:'/dataBind' , activeClass:'active'}">
                <span class="weui_cell_bd weui_cell_primary">双向数据绑定</span>
                <span class="weui_cell_ft"></span>
            </a>
            <a class="weui_cell" v-link="{path:'/conditionRouter' , activeClass:'active'}">
                <span class="weui_cell_bd weui_cell_primary">根据条件跳转路由</span>
                <span class="weui_cell_ft"></span>
            </a>
            <a class="weui_cell" v-link="{path:'/wechatImg' , activeClass:'active'}">
                <span class="weui_cell_bd weui_cell_primary">模仿微信点击图片放大</span>
                <span class="weui_cell_ft"></span>
            </a>
            <a class="weui_cell" v-link="{path:'/table' , activeClass:'active'}">
                <span class="weui_cell_bd weui_cell_primary">Vue实现自定义表格</span>
                <span class="weui_cell_ft"></span>
            </a>
            <a class="weui_cell" v-link="{path:'/inputCheck' , activeClass:'active'}">
                <span class="weui_cell_bd weui_cell_primary">input框检查</span>
                <span class="weui_cell_ft"></span>
            </a>
            <a class="weui_cell" v-link="{path:'/propsdata' , activeClass:'active'}">
                <span class="weui_cell_bd weui_cell_primary">todoList Demo</span>
                <span class="weui_cell_ft"></span>
            </a>
            <a class="weui_cell" v-link="{path:'/routerdata' , activeClass:'active'}">
                <span class="weui_cell_bd weui_cell_primary">利用路由实现tab切换并传参数</span>
                <span class="weui_cell_ft"></span>
            </a>
        </div>
        <div class="weui_cells_title">详情页</div>
        <div class="weui_panel weui_panel_access weui_cells_access">
            <div class="weui_panel_bd">
                <a v-for="list_item in list_items" v-link="{path:'/detail' , activeClass:'active'}" class="weui_media_box weui_media_appmsg weui_cells_access">
                    <div class="weui_media_hd">
                        <img class="weui_media_appmsg_thumb" :src="list_item.src" alt="图片">
                    </div>
                    <div class="weui_media_bd">
                        <h4 class="weui_media_title">{{list_item.title}}</h4>
                        <p class="weui_media_desc">{{list_item.number}}</p>
                        <p class="weui_media_desc">{{list_item.check}}</p>
                    </div>
                    <span class="weui_cell_ft">{{list_item.content}}</span>
                </a>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    export default{
        data(){
            return{
                'list_items':[
                    {title:'Vue',src:'./static/logo.png',number:'XX数量（9）',check:'过期',content:'单页'},
                    {title:'Angular',src:'./static/logo.png',number:'XX数量（6）',check:'过期',content:'单页'}
                ]
            }
        }
    }
</script>
<style scoped>
.weui_cells_access{
    margin:0;
    border-top:0;
}
</style>