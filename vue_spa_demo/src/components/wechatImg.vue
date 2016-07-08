<template>
    <div class="wechatImg">
        <img
            v-for="img of imgs"
            class="small-img"
            :src="img.src"
            @click="zoomImg($index)"
            alt="img"/>
        <div class="shadow-box" :style="{display:parameter}">
            <div class="shadow"
                 @click="hiddenImg"
                 v-if="show"
                 transition="fade"
            ></div>
            <img class="big-img"
                 :src="imgSrc"
                 v-if="show"
                 :transition="imgZoom"
                 alt="图片">
        </div>
    </div>
</template>
<script>
var elements;
export default{
    ready(){
       elements=document.querySelectorAll('.small-img');
    },
    data(){
       return{
           imgs:[
               {src:'../../static/click1.jpg'},
               {src:'../../static/click2.jpg'},
               {src:'../../static/click3.jpg'}
           ],
           imgSrc:'../../static/click1.jpg',
           show:false,
           imgZoom:'zoom',
           parameter:'none'
       }
    },
    methods:{
       zoomImg(index){
           this.show=true;
           this.parameter='block';
           let nowElement=elements[index];
           let offsetLeft=nowElement.offsetLeft,
               offsetTop=nowElement.offsetTop;
           if(index===0){
               this.imgSrc='../../static/click1.jpg';
               this.imgZoom='zoom';
           }else if(index===1){
               this.imgSrc='../../static/click2.jpg';
               this.imgZoom='zoom2';
           }else {
               this.imgSrc='../../static/click3.jpg';
               this.imgZoom='zoom3';
           }
       },
       hiddenImg(){
           this.show=false;
           setTimeout(()=>this.parameter='none',300);
       }
    },
    transitions:{
        beforeEnter(){
            alert(1)
        },
        enter(){
            alert(2)
        }
    }
}
</script>
<style scoped>
    .small-img{
        width:150px;
        height:auto;
        cursor: pointer;
        margin:20px;
    }
    .shadow-box{
        width:100%;
        height:100%;
        position: fixed;
        left:0;
        top:0;
    }
    .shadow{
        width:100%;
        height:100%;
        background-color: rgba(0,0,0,1);
    }
    /*背景的动画*/
    .fade-transition{
        -webkit-transition: all .3s ease;
        transition: all .3s ease;
        opacity:1;
    }
    .fade-enter, .fade-leave{
        opacity:0;
    }
    /*图片的动画*/
    .zoom2-transition,
    .zoom3-transition,
    .zoom-transition{
        width:60%;
        height:auto;
        position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
        -webkit-transition: all .3s ease;
        transition: all .3s ease;
    }
    .zoom-enter, .zoom-leave{
        width:150px;
        height:auto;
        position: absolute;
        left:20px;
        top:20px;
        transform: translate(0,0);
    }
    .zoom2-enter, .zoom2-leave{
        width:150px;
        height:auto;
        position: absolute;
        left:210px;
        top:20px;
        transform: translate(0,0);
    }
    .zoom3-enter, .zoom3-leave{
        width:150px;
        height:auto;
        position: absolute;
        left:400px;
        top:26px;
        transform: translate(0,0);
    }
</style>