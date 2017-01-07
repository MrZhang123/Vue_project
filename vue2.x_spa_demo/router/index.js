import Vue from 'vue';
import VueRoter from 'vue-router';

Vue.use(VueRoter);

import tab from '../src/components/tab.vue';
import JS from '../src/components/js.vue';

export default new VueRoter({
    routes: [
        //设置根目录时候渲染谁，即默认情况下渲染哪个组件
        // {path:'/',component:zy},
        //路由重定向
        {path:'/',redirect:'/tab'},
        {path:'/tab',component:tab}, 
        {path:'/JS',component:JS}
    ]
})