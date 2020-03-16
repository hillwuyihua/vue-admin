import Vue from 'vue'
import axios from 'axios'//ajax
import store from '../store'
/* console.log("当前的环境是: ",process.env.NODE_ENV) */
let BaerUrls="";
if(process.env.NODE_ENV=="development"){
	BaerUrls="https://www.gcy168.com";
}else if(process.env.NODE_ENV=="test"){
	BaerUrls="https://www.gcy168test.com";
}else if(process.env.NODE_ENV=="production"){
	BaerUrls="https://www.gcy168production.com";
}
//axios全局配置
const instance = axios.create({
  //请求接口
  baseURL:BaerUrls,
  //超时设置
  timeout:8000,
  //请求头设置
  headers: {
        "accept": "application/json",
        'Content-Type': 'application/json',
  }
})

// 在发送请求之前做些什么("请求拦截器")
instance.interceptors.request.use(config => {
	  //  console.log(store.getters.Config.token)
        //假设接口需要对接token，可以用store保存token,在拦截器中设置到header中
        //store需要安装、引入
	// config.headers.common['Authorization'] = "store.state.Config.token"
    /* if(store.state.Config.token){
        config.headers.common['Authorization'] = store.state.Config.token
    }else{
        config.headers.common['Authorization'] = store.state.Config.machine
    } */
    return config;
    }, error => {
    // 对请求错误做些什么
    //console.log(error)
});
//respone拦截器==>对响应做处理
instance.interceptors.response.use(
    response => {  //成功请求到数据
	//console.log(response)
     if(response.status==200){
        return response
    }else{
         return "请求错误"
    }
    },
    error => {  //响应错误处理
        /*   if (error.response.status) {            
            switch (error.response.status) { 
				 case 401:                    
                    router.replace({                        
                        path: '/login',                        
                        query: { 
                           redirect: router.currentRoute.fullPath 
                        }
                    });
                    break;
				 case 404:
                    Toast({
                        message: '网络请求不存在',
                        duration: 1500,
                        forbidClick: true
                    });
                    break;
			 }
			} */
    }
);

export default instance;