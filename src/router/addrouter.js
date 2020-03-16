import { asyncRoutes,resetRouter } from './index'
import store from '../store'
import { mapGetters,  mapActions} from "vuex";
export function menusToRoutes(data) {
	let arr_data={};//记录所有路由信息中的name和text,用于点击工菜单时显示右边上的小菜单
	let arr=[] //记录所有路由信息
	tree_arr(data)
	function tree_arr(d){
		for(let i=0;i<d.length;i++){
			if(d[i].children.length==0){
				 if(asyncRoutes[d[i].name]){
					 arr.push(asyncRoutes[d[i].name]) //去匹配要加载的路由菜单
				 }	
				 
				 let oo={} //用于显示中文菜单信息，记录所有路由信息中的name和text,用于点击菜单时显示右边上的小菜单
				 oo.name=d[i].name
				 oo.text=d[i].text
				 arr_data[d[i].name]=oo
				 //arr_data.push(oo)
			}else{
				tree_arr(d[i].children)
			}
		}
		
	}
	//console.log(arr)
	//console.log(arr_data)
	localStorage.setItem('menu_infomation',JSON.stringify(arr_data)) //保存路由菜单的name和text中文名
	
	
    const result = []
	result.push(	{
	  path: '/',
	  component: () => import('@/components/index.vue'),
	  children:arr
	},
	)
console.log(result)
	return result
	
}



export function resetTokenAndClearUser() {
    // 退出登陆 清除用户资料
    localStorage.setItem('token', '')
    localStorage.setItem('userImg', '')
    localStorage.setItem('userName', '')
	localStorage.setItem('keepAlive', 'home') //清空记录当前路由菜单，刷新后定位回首页
	localStorage.setItem('keepAliveCP', ['home']) //清空要缓存的组件
	localStorage.setItem('menu_infomation', '') //清空记录路由菜单的name和text中文名
	store.dispatch('clearall')//清除所有记录路由信息
	
	
    // 重设路由
    resetRouter()
  

}