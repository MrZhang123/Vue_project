import Vue from 'vue';
import VueRoter from 'vue-router';

Vue.use(VueRoter);

import tab from '../src/components/tab.vue';
import zhihu from '../src/components/zhihu.vue';

import propsDemo from '../src/components/demo/propsDemo.vue';

export default new VueRoter({
    // mode: 'history',
    routes: [
        //设置根目录时候渲染谁，即默认情况下渲染哪个组件
        // {path:'/',component:zy},
        //路由重定向
        {path:'/',redirect:'/tab'},
        {path:'/tab',component:tab}, 
        {path:'/propsDemo',component:propsDemo},
        {path:'/zhihu',component:zhihu}
    ]
})