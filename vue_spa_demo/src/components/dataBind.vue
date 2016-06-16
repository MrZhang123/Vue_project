<template>
    <div class="dataBind">
        <div class="hd">
            <h1 class="page_title">Vue</h1>
            <p class="page_desc">利用双向数据绑定实现</p>
        </div>
        <div>说明：点击下面的选项会出现上面相应的块儿，如果点击上面块儿中的‘X’则可以关闭</div>
        <div class="top">
            <span class="item" v-for="item in items">{{item.place}}<span class="remove" @click.stop="removeFun($index)">X</span></span>
        </div>
        <div class="check">
            <span class="check_item" v-for="checkbox in checkboxes" >
                <input class="checkbox_input" type="checkbox" :id="checkbox.id" v-model="selected[$index]" @click.stop="addFun($index)"><label :for="checkbox.id">{{checkbox.place}}</label>
            </span>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            items:[],
            selected:[],
            checkboxes:[
                {id:'check_input_1',place:'安徽'},
                {id:'check_input_2',place:'全椒县'},
                {id:'check_input_3',place:'南京'},
                {id:'check_input_4',place:'热河路'},
                {id:'check_input_5',place:'郑州'}
            ]
        }
    },
    methods:{
        addFun(bottomIndex){
            if(!this.selected[bottomIndex]){
                this.items.push({place:this.checkboxes[bottomIndex].place});
            }else{
                let nowPlace=this.checkboxes[bottomIndex].place;
                let items=this.items;
                for(let i=0;i<items.length;i++){
                    if(items[i].place===nowPlace){
                        items.splice(i,1);
                    }
                }
            }
        },
        removeFun(topIndex){
            let nowItem=this.items[topIndex].place;
            let checkboxes=this.checkboxes;
            let selected=this.selected;
            this.items.splice(topIndex,1);
            for(let i=0;i<checkboxes.length;i++){
                if(checkboxes[i].place===nowItem){
                    selected.$set(i,false);
                }
            }
        }
    }
}
</script>
<style scoped>
.dataBind{
    padding:20px;
}
.top{
    width:100%;
    height:auto;
    margin-top: 40px;
}
.item{
    display: inline-block;
    line-height: 30px;
    text-align: center;
    border: 1px solid #000;
    margin-right: 30px;
    margin-bottom: 20px;
}
.item .remove{
    margin-left: 10px;
    cursor: pointer;
}
.item .remove:hover{
    color: red;
}
.check{
    margin-top: 10px;
}
input{
    outline: none;
}
</style>