import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import App from './app.vue';
import zy from './components/zy.vue';
import js from './components/js.vue';


const routes = [
    //设置根目录时候渲染谁，即默认情况下渲染哪个组件
    {path:'/',component:zy},
    //路由重定向
    // {path:'/',redirect:'/zy'},
    {path:'/zy',component:zy}, 
    {path:'/js',component:js}, 
];

const router = new VueRouter({
    routes
});

new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');