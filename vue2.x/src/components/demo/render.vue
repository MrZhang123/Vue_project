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
function inputText(createElement){
    return createElement('div',{
        attrs:{
            'class':'test-class'
        }
    },'this is test!');
}
export default{
    data(){
        return{
            
        }
    },
    components:{
        'weui-form':{
            render:function(createElement){
                return createElement('div',{
                    attrs:{
                        'class':'parents'
                    }
                },[inputText(createElement)])
            }
        }
    }
}    
</script>