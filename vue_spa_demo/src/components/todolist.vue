<template>
    <div class="todolist">
        <div class="hd">
            <h1 class="page_title">TodoList</h1>
            <p class="page_desc">Vue做一个todolist</p>
        </div>
        <div class="bd">
            <div class="weui_cells weui_cells_form">
                <div class="weui_cell">
                    <div class="weui_cell_hd">
                        <label class="weui_label">要做的事</label>
                    </div>
                    <div class="weui_cell_bd weui_cell_primary">
                        <input class="weui_input"
                               placeholder="请输入计划"
                               @keyup.enter="addTodo"
                               v-model="newTodo">
                    </div>
                </div>
            </div>
            <div class="weui_cells_title">计划表</div>
            <ul class="weui_cells weui_cells_access">
                <li v-for="item in items"
                    :class="[default,{finish:item.finish}]">
                    <div class="weui_cell_bd weui_cell_primary"
                         @click="toggleFinish(item)">
                        <p>{{item.content}}</p>
                    </div>
                    <button class="weui_btn weui_btn_mini weui_btn_primary"
                         @click="remove($index)">删除</button>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
.finish p{
    text-decoration: line-through;
    color: red;
}
.page_desc{
    cursor: pointer;
}
.weui_cells_title{
    text-align: center;
}
</style>
<script>
import store from '../store';
export default{
    data(){
        return{
            items:store.fetch(),
            default:'weui_cell',
            newTodo:''
        }
    },
    watch:{
        items:{
            handler(items){
                store.save(items);
            },
            deep:true
        }
    },
    methods:{
        toggleFinish(item){
            item.finish = !item.finish;
        },
        addTodo(){
            var newitem = this.newTodo.trim();
            if(newitem!==''){
                this.items.push({content:newitem,finish:false});
                this.newTodo ='';
            }
        },
        remove(index){
            this.items.splice(index, 1);
        }
    }
}
</script>
