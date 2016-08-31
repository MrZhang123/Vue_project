import Vue from 'vue';
import VueRouter from 'vue-router';

//引入组件
import App from './app.vue';
import home from './components/home.vue';
//在list页中demo的组件
import list from './components/list.vue';
import detail from './components/detail.vue';
import comDemo from './components/com_demo.vue';
import conditionRouter from './components/condition_router.vue';
import wechatImg from './components/wechatImg.vue';
import table from './components/table.vue';
import inputCheck from './components/inputCheck.vue';
import todolist from  './components/todolist.vue';
import routerdata from './components/routerdata.vue';
import tab1 from './components/routertab/tab1.vue';
import tab2 from './components/routertab/tab2.vue';

import dataBind from './components/dataBind.vue';
import form from './components/form.vue';

Vue.use(VueRouter);

var app=Vue.extend(App);

var router=new VueRouter();

//配置路由
router.map({
  '/home': {
    component: home
  },
  '/list': {
    component: list
  },
  '/detail': {
    component: detail
  },
  '/comDemo': {
    component: comDemo
  },
  '/conditionRouter':{
    component:conditionRouter
  },
  '/wechatImg':{
    component:wechatImg
  },
  '/table':{
    component:table
  },
  '/inputCheck':{
    component:inputCheck
  },
  '/propsdata':{
    component:todolist
  },
  '/routerdata':{
    component:routerdata,
    subRoutes:{
      '/':{
        component:tab1
      },
      '/tab2':{
        component:tab2
      }
    }
  },
  '/form':{
    component: form
  },
  '/dataBind':{
    component: dataBind
  }
});
//设置默认情况下打开的页面
router.redirect({
  '/':'home'
});
router.start(app,'#app');
//暴露路由接口调试
window.router = router;