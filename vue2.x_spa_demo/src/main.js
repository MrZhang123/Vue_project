import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import App from './app.vue';


const routes = [
    {path:'/home',component:App}
];

const router = new VueRouter({
    routes
});

// new Vue({
//     router: router,
//     render: h => h(App)
// }).$mount('#app');
new Vue({
    el:'#app',
    components:{App}
});
