<template>
<div class="tab_1">
    <div class="weui_panel_access">
        <div class="weui_panel weui_panel_access weui_cells_access">
            <a v-for="item_two in items_two" v-link="{path:'/list' , activeClass:'active'}" class="weui_media_box weui_media_appmsg weui_cells_access">
                <div class="weui_media_hd">
                    <img class="weui_media_appmsg_thumb" :src="item_two.src" alt="图片">
                </div>
                <div class="weui_media_bd">
                    <h4 class="weui_media_title">{{item_two.title}}</h4>
                    <p class="weui_media_desc">{{item_two.content}}</p>
                </div>
                <span class="weui_cell_ft"></span>
            </a>
        </div>
    </div>
</div>
</template>
<script>
export default{
    data(){
        return{
            items_two:[
                {title:'VueRouter',src:'./static/designer.jpg',content:'XX数量（9）'}
            ]
        }
    }
}
</script>