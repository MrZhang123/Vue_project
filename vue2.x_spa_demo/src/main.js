import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import App from './app.vue';
import aa from './components/aa.vue';
import bb from './components/bb.vue';


const routes = [
    //设置根目录时候渲染谁，即默认情况下渲染哪个组件
    {path:'/',component:aa},
    {path:'/aa',component:aa}, 
    {path:'/bb',component:bb}, 
];

const router = new VueRouter({
    routes
});

new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');