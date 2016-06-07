<template>
<div class="list">
    <div class="hd">
        <h1 class="page_title">Vue</h1>
        <p class="page_desc">Vuejs+webpack实现</p>
    </div>
    <div class="weui_panel_access">
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
</template>
<script>
    export default{
        data(){
            return{
                'list_items':[
                    {'title':'Vue','src':'./static/logo.png','number':'XX数量（9）','check':'过期','content':'单页'},
                    {title:'Angular',src:'./static/logo.png',number:'XX数量（6）',check:'过期',content:'单页'},
                    {title:'React',src:'./static/logo.png',number:'XX数量（6）',check:'过期',content:'单页'},
                    {title:'Gulp',src:'./static/logo.png',number:'XX数量（6）',check:'过期',content:'单页'},
                    {title:'Webpack',src:'./static/logo.png',number:'XX数量（6）',check:'过期',content:'单页'},
                    {title:'ES6',src:'./static/logo.png',number:'XX数量（6）',check:'过期',content:'单页'},
                    {title:'ES6',src:'./static/logo.png',number:'XX数量（6）',check:'过期',content:'单页'},
                    {title:'ES6',src:'./static/logo.png',number:'XX数量（6）',check:'过期',content:'单页'},
                    {title:'ES6',src:'./static/logo.png',number:'XX数量（6）',check:'过期',content:'单页'}
                ]
            }
        }
    }
</script>
<style>

</style>