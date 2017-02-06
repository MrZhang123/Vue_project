<template>
    <div class="render">
        <div class="page__hd">
            <h1 class="page__title">render函数的使用</h1>
            <p class="page__desc">使用render函数创建组件</p>
        </div>
        <div class="page__bd">
            <weui-form></weui-form>
        </div>
    </div>
</template>
<script>
function weuiCellsTitle(createElement){
    return createElement('div',{
        attrs:{
            'class':'weui-cells__title'
        }
    },'文本框');
}

function weuiInput(createElement){
    return createElement('input',{
        attrs:{
            'class':'weui-input',
            'placeholder':'请输入文本',
            'type':'text',
            'v-model':'test'
        }
    })
}
function weuiCellBd(createElement){
    return createElement('div',{
        attrs:{
            'class':'weui-cell__bd'
        }
    },[weuiInput(createElement)]);
}
function weuiCell(createElement){
    return createElement('div',{
        attrs:{
            'class':'weui-cell'
        }
    },[weuiCellBd(createElement)]);
}
function weuiCells(createElement){
    return createElement('div',{
        attrs:{
            'class':'weui-cells'
        }
    },[weuiCell(createElement)]);
}

export default{
    data(){
        return{
            val:''
        }
    },
    components:{
        'weui-form':{
            render:function(createElement){
                return createElement('div',{
                    attrs:{
                        'class':'parents'
                    }
                },[weuiCellsTitle(createElement),weuiCells(createElement)]);
            }
        }
    }
}    
</script>