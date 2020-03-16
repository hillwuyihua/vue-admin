import Vue from 'vue'
import Router from 'vue-router'
import Error from '@/components/404'//首页默认页
import store from '../store'
Vue.use(Router)

// 需要通过后台数据来生成的组件
export const asyncRoutes = {
    'home': {
        path: 'home',
        name: 'home',
        component: () => import('@/components/home.vue')
    },
    'table': {
        path: 'table',
        name: 'table',
        component: () => import('@/components/table.vue')
    },
    'password': {
        path: 'password',
        name: 'password',
        component: () => import('@/components/password.vue')
    },
    'msg': {
        path: 'msg',
        name: 'msg',
        component: () => import('@/components/Msg.vue')
    },
    'userinfo': {
        path: 'userinfo',
        name: 'userinfo',
        component: () => import('@/components/UserInfo.vue')
    },
	 'userinfo2': {
	    path: 'userinfo2',
	    name: 'userinfo2',
	    component: () => import('@/components/UserInfo.vue')
	}
}
let routes=[

	{
	path: '/login',
	name: 'login',
     component: () => import('@/components/login.vue'),
			meta: {
		  title: '登录',
		}
	},
 {path: '/', redirect: '/home'},
	
	 
]


/* export default new Router({
  routes: routes,

}) */

const createRouter = () => new Router({
    routes: routes
})

const router = createRouter()

export function resetRouter() {
	console.log("resetRouter")
  const newRouter = createRouter()
  router.matcher = newRouter.matcher 
  
   
}

export default router





/* export default new Router({
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
	 { path: '*',
	  component: Error,
	   meta: {
		  title: '404错误!!',
		}
	}, 
	
  ]
}) */
