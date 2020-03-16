//初始化数据
const state = {
	Config:{
		token:'vuex--Iam_terry',
		machine:'Iam_perry'
		},
		menu:{
			    // 左侧菜单栏数据
			    menuItems: [
			        {   id:"001",
			            name: 'home', // 要跳转的路由名称 不是路径
			            text: '主页', // 文本内容
						children:[]
			        },
			        {   
						id:"002",
			            text: '二级菜单',
						name: 'two', 
			            children: [
			                {   id:"0022",
			                    name: 'table',
			                    text: '表格',
								children:[
								]
			                },
			                {   id:"0023",
			                    text: '三级菜单',
								name: 'free', 
			                    children: [
			                        {
										id:"00233",
			                            name: 'msg',
			                            text: '查看消息',
										children:[]
			                        },
			                        {   id:"0024",
			                            name: 'password',
			                            text: '修改密码',
										children:[]
			                        },
			                        {  
										id:"0025",
			                            name: 'userinfo',
			                            text: '基本资料',
										children:[]
			                        },
									 
									
			                    ]
			                }
			            ]
			        }
			    ],
		},
    //商品列表
    keepAliveCP:['home'],//设置缓存组件
	keepAlive_btn:'home',//记录当前路由高亮。

}

//getter 抛出去的数据
const getters = {	
	GetMemu:state => state.menu.menuItems,
    //商品列表
   
	Get_keepAliveCP:state => state.keepAliveCP,//设置缓存组件
    Get_keepAlive_btn:state => state.keepAlive_btn,//记录当前路由高亮
   
}

//action 异步的操作
const actions = {
	keepAlive_data({commit},data){//设置缓存组件
		 commit('set_keepAlive',data)
	},
	keepAlive_data_relod({commit},data){//刷新时设置缓存组件,暂时不用
		 commit('set_keepAlive_relod',data)
	},
	cutbtn_data({commit},data){//点击关闭导航按钮设置缓存组件
		 commit('set_cutbtnkeepAlive',data)
	},
	Get_keepAlive_btn_data({commit},data){//记录当前路由高亮
		 commit('set_keepAlive_btn',data)
	},
	clearall({commit}){ //清除所有记录路由信息
		 commit('clear_all_st')
		
	}
	
	}
//mutation
const mutations = {	 
	set_keepAlive(state,datas){//设置缓存组件,增加
	     let s=state.keepAliveCP.indexOf(datas)
		// console.log(state.keepAliveCP)
		 if(s==-1){//如果已存在，就不用重复放进数组里。
			 state.keepAliveCP=[...state.keepAliveCP,datas]
			  //console.log(state.keepAliveCP+'--->>')
			 localStorage.setItem('keepAliveCP',state.keepAliveCP) //保存点击路由
          } 
    },
	set_keepAlive_relod(state,datas){//刷新时设置缓存组件,暂时不用
		 state.keepAliveCP=[...state.keepAliveCP]
	},
	
	set_cutbtnkeepAlive(state,datas){//点击关闭导航按钮
		 state.keepAliveCP.splice( state.keepAliveCP.indexOf(datas), 1);
		 localStorage.setItem('keepAliveCP',state.keepAliveCP) //保存点击路由
	},
	set_keepAlive_btn(state,d){//记录当前路由高亮
		state.keepAlive_btn=d;
		localStorage.setItem("keepAlive",d);//保存当前路由，用于涮新时，定位到当前打开的菜单
	},
	clear_all_st(state){//清除所有记录路由信息
		 state.keepAliveCP=[];
		 state.keepAlive_btn='home';
	}
  
}


export default {
    state,
    mutations,
    actions,
    getters,
  };
