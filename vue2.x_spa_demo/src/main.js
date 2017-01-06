import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import App from './app.vue';
import ZY from './components/zy.vue';
import JS from './components/js.vue';


const routes = [
    //设置根目录时候渲染谁，即默认情况下渲染哪个组件
    // {path:'/',component:zy},
    //路由重定向
    {path:'/',redirect:'/ZY'},
    {path:'/ZY',component:ZY}, 
    {path:'/JS',component:JS},
];

const router = new VueRouter({
    // mode: 'history',
    routes
});

new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');