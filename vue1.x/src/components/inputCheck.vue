<template>
    <div class="inputcheck">
        <div class="hd">
            <h1 class="page_title">Vue</h1>
            <p class="page_desc">实现数组重复元素的检测</p>
        </div>
        <input v-for="input of inputs"
               :class="{'error':checkClass[$index]}"
               type="text"
               :value="input.value"
               v-model="select[$index]"
               @blur="blurFun($index)">
    </div>
</template>
<script>
    export default{
        data(){
            return{
                inputs:[
                    {value:'124'},
                    {value:'12'},
                    {value:'123'},
                    {value:'12'},
                    {value:'12'},
                    {value:'123'}
                ],
                select:[],
                checkClass:[false,false,false,false,false]
            }
        },
        methods:{
            blurFun(index){
                const myArray=this.select;
                const length=myArray.length;
                let arrayI=[];
                for(var i=0;i<length;i++){
                    this.checkClass.$set(i,false);
                    /*检测数组中的重复数字并标记*/
                    for(var j=length;j>i;j--){
                        if(myArray[i]===myArray[j]){
                            arrayI.push(i);
                            arrayI.push(j);
                        }
                    }
                }
                var newSetArray=Array.from(new Set(arrayI));
                for(let i=0;i<newSetArray.length;i++){
                    this.checkClass.$set(newSetArray[i],true);
                }
            }
        }
    }
</script>
<style scoped>
    input{
        display: block;
        margin:20px auto;
        padding:5px;
        outline:none;
    }
    .error{
        border: 1px solid red;
    }
</style>