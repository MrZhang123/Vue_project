import Vue from 'vue';
import VueRoter from 'vue-router';

Vue.use(VueRoter);

import tab from '../src/components/tab.vue';
import zhihu from '../src/components/zhihu.vue';

import componentDemo from '../src/components/demo/componentDemo.vue';

export default new VueRoter({
    // mode: 'history',
    routes: [
        //设置根目录时候渲染谁，即默认情况下渲染哪个组件
        // {path:'/',component:zy},
        //路由重定向
        {path:'/',redirect:'/tab'},
        {path:'/tab',component:tab}, 
        {path:'/componentDemo',component:componentDemo},
        {path:'/zhihu',component:zhihu}
    ]
})