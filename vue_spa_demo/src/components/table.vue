<template>
    <div class="table">
        <div class="hd">
            <h1 class="page_title">Table</h1>
            <p class="page_desc">Vue的Table</p>
        </div>
        <table>
            <tr>
                <th>省</th>
                <th>市</th>
                <th>县</th>
                <th>操作</th>
            </tr>
            <tr v-for="item of items">
                <td>{{item.province}}</td>
                <td>{{item.town}}</td>
                <td>{{item.county}}</td>
                <td>
                    <a href="javascript:;"
                       class="weui_btn weui_btn_mini weui_btn_primary"
                       @click="del(item)">删除</a>
                </td>
            </tr>
        </table>
        <div class="weui_cells_title">点击添加</div>
        <div class="weui_cells weui_cells_form">
            <div class="weui_cell">
                <div class="weui_cell_hd"><label class="weui_label">省</label></div>
                <div class="weui_cell_bd weui_cell_primary">
                    <input class="weui_input" type="text" placeholder="请输入省" v-model="item.province"/>
                </div>
            </div>
            <div class="weui_cell">
                <div class="weui_cell_hd"><label class="weui_label">市</label></div>
                <div class="weui_cell_bd weui_cell_primary">
                    <input class="weui_input" type="text" placeholder="请输入市" v-model="item.town"/>
                </div>
            </div>
            <div class="weui_cell">
                <div class="weui_cell_hd"><label class="weui_label">县</label></div>
                <div class="weui_cell_bd weui_cell_primary">
                    <input class="weui_input" type="text" placeholder="请输入县" v-model="item.county"/>
                </div>
            </div>
        </div>
        <div class="weui_btn_area">
            <a class="weui_btn weui_btn_primary"
               href="javascript:"
               @click="add">添加</a>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
               items:[
                   {province:'山西',town:'太原',county:'清徐'},
                   {province:'湖北',town:'武汉',county:'XXX'},
                   {province:'湖南',town:'长沙',county:'ZZZ'},
                   {province:'陕西',town:'西安',county:'AAA'}
               ]
            }
        },
        methods:{
            del(item){
                this.items.$remove(item);
            },
            add(){
                this.items.push(this.item);
                this.item='';
            }
        }
    }
</script>
<style scoped>
    table{
        width:80%;
        height:auto;
        border-collapse: collapse;
        margin:30px auto;
    }
    .table tr,
    .table td{
        padding:10px 20px;
        text-align: center;
        border: 1px solid #000;
    }
</style>