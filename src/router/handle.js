import router from './index'
import { menusToRoutes,resetTokenAndClearUser } from './addrouter'
import instance from '../utils/https.js' //axios拦截器
import store from '../store'
let hasMenus = false

router.beforeEach(async (to, from, next) => {
    if (localStorage.getItem('token')) {
        if (to.path === '/login') {
            next({path: '/'})
        } else {
            if (hasMenus) {
                next()
            } else {
                try {
                    // 这里可以用 await 配合请求后台数据来生成路由
                    // const data = await axios.get('xxx')
                    // const routes = menusToRoutes(data)
                    const routes = menusToRoutes(store.getters.GetMemu)
					
                    // 动态添加路由
                    router.addRoutes(routes)
					//	console.log("---router----")
					//console.log(router)
				   
                    hasMenus = true
                    next({path: '/'})
                } catch (error) {
					console.log(("--resetTokenAndClearUser---"))
                  
                    next(`/login?redirect=${to.path}`)
                }
            }
        }
    } else {
        hasMenus = false
        if (to.path === '/login') {
            next()
        } else {
            next(`/login?redirect=${to.path}`)
        }
    }
})


