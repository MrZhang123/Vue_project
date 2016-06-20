<template>
    <div class="condition_router">
        <div class="hd">
            <h1 class="page_title">Vue</h1>
            <p class="page_desc">根据条件跳转不同路由</p>
        </div>
        <div class="bd">
            <div class="weui_cells weui_cells_form">
                <div class="weui_cell">
                    <div class="weui_cell_hd"><label class="weui_label">姓名</label></div>
                    <div class="weui_cell_bd weui_cell_primary">
                        <input class="weui_input" type="text"  placeholder="请输入姓名" v-model="userName"/>
                    </div>
                </div>
                <div class="weui_cell">
                    <div class="weui_cell_hd"><label class="weui_label">手机号</label></div>
                    <div class="weui_cell_bd weui_cell_primary">
                        <input class="weui_input" type="number" pattern="[0-9]*" placeholder="请输入手机号" v-model="userPhone"/>
                    </div>
                </div>
            </div>
            <div class="weui_btn_area">
                <a class="weui_btn weui_btn_primary" id="showTooltips" @click="linkFun">跳转</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                userName:'',
                userPhone:''
            }
        },
        methods:{
            linkFun(){
                let userName=this.userName.trim();
                let userPhone=this.userPhone.trim();
                if(userName!==''&&userPhone===''){
                    /*这里可以利用router.go根据不同的条件进行不同的跳转*/
                    /*router.go({
                        path:'路径1',
                        activeClass:'active'
                    });*/
                    alert('Plase write userPhone!');
                }else if(userName===''&&userPhone===''){
                    /*router.go({
                        path:'路径2',
                        activeClass:'active'
                    });*/
                    alert('Plase write userPhone and userName!');
                }else {
                    /*router.go({
                        path:'路径3',
                        activeClass:'active'
                    });*/
                    alert('Other');
                }
            }
        }
    }
</script>