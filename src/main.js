import Vue from 'vue'
import App from './App.vue'

import router from './router'
import instance from './utils/https.js' //axios拦截器
Vue.prototype.$http = instance 

import './router/handle' //路由拦截、设置title及强制跳转。
//import './utils/rem.js' 
//import '../static/css/common.css' /*引入公共样式*/

import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);





Vue.config.productionTip = false

new Vue({
	router,
	store,
  render: h => h(App),
}).$mount('#app')
