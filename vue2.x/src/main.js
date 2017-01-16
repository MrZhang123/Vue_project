import Vue from 'vue';
import App from './app.vue';
import router from '../router';


new Vue({
    router,
    render: h => h(App)

    /*render:function(createElement){
        return createElement(App);
    }*/
    
    /*components:{
        'app':App
    }*/
}).$mount('#app');