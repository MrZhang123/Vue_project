<!--父组件-->
<template>
    <div class='com_demo'>
        <div class="hd">
            <h1 class="page_title">通信</h1>
            <p class="page_desc">父子组件之间通信演示</p>
        </div>
        <div class="bd">
            <div class="weui_cells_title">父子组件单向通信---父组件1</div>
            <div class="weui_cells">
                <div class="weui_cell">
                    <div class="weui_cell_hd"><label class="weui_label">输入文字</label></div>
                    <div class="weui_cell_bd weui_cell_primary">
                        <input class="weui_input" v-model="transmit_data" type="text" placeholder="这里的文字改变子组件文字"/>
                    </div>
                </div>
            </div>
            <div class="weui_cells_title">父子组件双向通信---父组件2</div>
            <div class="weui_cells">
                <div class="weui_cell">
                    <div class="weui_cell_hd"><label class="weui_label">输入文字</label></div>
                    <div class="weui_cell_bd weui_cell_primary">
                        <input class="weui_input" v-model="transmit_sync_data" type="text" placeholder="这里的文字改变是双向的改变"/>
                    </div>
                </div>
                <div class="weui_cell">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p>变化的文字</p>
                    </div>
                    <div class="weui_cell_ft">{{transmit_sync_data}}</div>
                </div>
            </div>
            <div class="weui_cells_title">父子组件双向通信---父组件3</div>
            <div class="weui_cells">
                <div class="weui_cell">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p>要传递的文字</p>
                    </div>
                    <div class="weui_cell_ft">{{give_child_msg}}</div>
                </div>
            </div>
            <div class="weui_btn_area">
                <a class="weui_btn weui_btn_primary" href="javascript:" id="showTooltips" @click="paraToChild($event)">点击后给子组件3传递数据</a>
            </div>
            <div class="line">------------------------父子组件分割线------------------------</div>
            <detail-child
                :propsdata="transmit_data"
                :propsdata_test="transmit_test"
                :propsdata_sync.sync="transmit_sync_data"></detail-child>
        </div>
    </div>
</template>
<script>
import detailChild from './communication.vue';
export default{
    data(){
        return{
            transmit_data:'试着改变文字',
            transmit_test:[
                {head:'这个数据',conntent:'来源于'},
                {head:'我的',conntent:'父组件'}
            ],
            transmit_sync_data:'实现父子组件双向数据通信',
            give_child_msg:'点击后下面按钮被传递给子组件'
        }
    },
    components:{
        'detail-child':detailChild
    },
    methods:{
        paraToChild(e){
            console.log(e)
            this.$broadcast('parent-mg',this.give_child_msg);
        }
    }
}
</script>
<style scoped>
    .line{
        text-align: center;
        margin: 20px 0;
        color: #0BB20C;
    }
</style>