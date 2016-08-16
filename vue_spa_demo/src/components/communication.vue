<!--子组件-->
<template>
    <div class="communication">
        <div class="weui_cells_title">父子组件单向通信---子组件1</div>
        <div class="weui_cells">
            <div class="weui_cell">
                <div class="weui_cell_bd weui_cell_primary">
                    <p>变化的文字</p>
                </div>
                <div class="weui_cell_ft">{{propsdata}}</div>
            </div>
        </div>
        <div class="weui_cells_title">父子组件双向通信---子组件2</div>
        <div class="weui_cells">
            <div class="weui_cell">
                <div class="weui_cell_hd"><label class="weui_label">输入文字</label></div>
                <div class="weui_cell_bd weui_cell_primary">
                    <input class="weui_input" v-model="propsdata_sync" type="text" placeholder="这里的文字改变是双向的改变"/>
                </div>
            </div>
            <div class="weui_cell">
                <div class="weui_cell_bd weui_cell_primary">
                    <p>变化的文字</p>
                </div>
                <div class="weui_cell_ft">{{propsdata_sync}}</div>
            </div>
        </div>
        <div class="weui_cells_title">父子组件双向通信---子组件3</div>
        <div class="weui_cells">
            <div class="weui_cell">
                <div class="weui_cell_bd weui_cell_primary">
                    <p>变化的文字</p>
                </div>
                <div class="weui_cell_ft">{{give_child_msg}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            give_child_msg:'点击按钮后我会变'
        }
    },
    props:['propsdata','propsdata_sync','propsdata_test'],
    ready(){
        console.log(this.propsdata_test);
    },
    events:{
        'parent-mg':function(msg){
            this.give_child_msg=msg;
        }
    }
}
</script>