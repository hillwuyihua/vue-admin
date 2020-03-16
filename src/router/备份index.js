import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'//首页默认页
import HelloWorld from '@/components/HelloWorld'//首页默认页
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: home,
		children: [
						{ path: '',
							name: 'HelloWorld',
							component: HelloWorld,
							meta: {
							title: '首页',
						 // requireAuth: true, // 判断该路由是否需要登录权限
							}
						},														
				 ]
    },
	/* { path: '*',
	  component: Error,
	   meta: {
		  title: '404错误!!',
		}
	}, */
	
  ]
})
