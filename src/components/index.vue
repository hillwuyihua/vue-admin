<template>
    <div class="container index_info">
       <section class="left">
		  <el-row class="tac">
			  <el-col :span="24">
				<el-menu
		  		:default-active="Get_keepAlive_btn"
				  class="el-menu-vertical-demo"
				  @select="hand_seletct"
				  @open="handleOpen"
				  @close="handleClose"
				  background-color="#545c64"
				  text-color="#fff"
				  active-text-color="#ffd04b">
				 <lefttree :list="GetMemu" class="manuTree"></lefttree>
				</el-menu>
			  </el-col>
			</el-row>  
		     
	   </section>
	   <section class="right">
		   <section class="banner">
				 <div class="btn_page" style="float: left; padding: 17px 0 0 0;">
					<el-tag
					 v-for="(tag,index) in Get_keepAliveCP"
					 :class="{'currt_ch':tag==Get_keepAlive_btn}"
					:key="tag"
					:closable="true"
					:close-transition="false"
          @close.stop="handleClose_tag(tag)"
					@click="ichoose_btn(tag)"
					type="primary"
				>
				{{store_name[tag].text}}
				</el-tag>
					 
				 </div>
				 
			   <div class="user_item" >
				   <el-dropdown  @command="handleCommand">
					  <span class="el-dropdown-link">
						小明<i class="el-icon-arrow-down el-icon--right"></i>
					  </span>
					  <el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item disabled>双皮奶</el-dropdown-item>
						<el-dropdown-item  command="loginOut">退出登录</el-dropdown-item>
					  </el-dropdown-menu>
					</el-dropdown>
			   </div>
			   
		   </section>
		  {{Get_keepAliveCP}}{{Get_keepAlive_btn}}
			<!--  重点：include 对应的值为组件里面的name(例：export default {name: 'table',),不是路由的name -->
		   <keep-alive :include="Get_keepAliveCP">
             <router-view/>
        </keep-alive>
	   </section>
	 
    </div>
	 
</template>

<script>
import lefttree from './left_tree'	
import { resetTokenAndClearUser } from '../router/addrouter'
import { mapGetters,  mapActions} from "vuex";

export default {
    name: 'index',
	  components: {lefttree}, 
    data () {
        return {
           store_name: JSON.parse(localStorage.getItem('menu_infomation') )
        }
    },
    created() {
			/* 用于涮新时，定位到当前打开的菜单 */
     let currnt=localStorage.getItem("keepAlive")
			 if(currnt){
				this.$store.dispatch('Get_keepAlive_btn_data',currnt)//记录当前高亮路由
				this.$store.dispatch('keepAlive_data',currnt)
			 }
			 /* let currnt_cp=localStorage.getItem("keepAliveCP")
				if(currnt_cp){
					 this.$store.dispatch('keepAlive_data_relod', currnt_cp)
				} */
		 /* 	 this.$store.dispatch('keepAlive_data', this.active_nav)//记录当前路由 */
			 this.$router.push({path: currnt})
			 /* 用于涮新时，定位到当前打开的菜单 */
    },
    mounted() {
       
    },
   computed: {
     ...mapGetters(['GetMemu','Get_keepAliveCP','Get_keepAlive_btn']),
   },
   
    methods: {
			
		handleCommand(c){//退出登录，清除相关登录及路由数据
			console.log(c)
			resetTokenAndClearUser()
			 this.$router.push({path: this.redirect || '/'})
		},
		hand_seletct(key, keyPath){ //设置点击后组件缓存
			let last=keyPath[keyPath.length-1]
			this.$store.dispatch('keepAlive_data',last)//需要缓存的组件name
			console.log( last);
			console.log( keyPath);
			this.$store.dispatch('Get_keepAlive_btn_data',last)//记录当前高亮路由
			this.$router.push({path: last})
			
		
		},
		 handleOpen(key, keyPath) {
			//console.log(key, keyPath);
		  },
		  handleClose(key, keyPath) {
			//console.log(key, keyPath);
		  },
			handleClose_tag(tag){//关闭标签
			console.log(tag)
			if(tag!='home'){
				this.$store.dispatch('cutbtn_data',tag)//点击关闭导航按钮设置缓存组件
				this.$store.dispatch('Get_keepAlive_btn_data','home')//记录当前高亮路由  关闭标签后，默认回到home首页
				this.$router.push({path: 'home'}) //默认回到home首页
			}
			
				// this.Get_keepAliveCP.splice(this.Get_keepAliveCP.indexOf(tag), 1);
			},
			ichoose_btn(tag){ //点击导航按钮
				console.log(tag)
				this.$store.dispatch('Get_keepAlive_btn_data',tag)//记录当前高亮路由
				this.$router.push({path: tag})
			}
			
    }
}
</script>
<style>
	.index_info .el-menu{ border: none;}
	.btn_page .el-tag{ margin: 0 2px;}
	.btn_page .currt_ch .el-tag__close{ color: #fff;}
</style>
<style scoped lang="less">
 .currt_ch{ background: #409EFF; color: #fff} 
.container{
	 height: 100%;
	   .left{width:150px;height: 500px; float: left; overflow: hidden;  height: 100%; background: rgb(84, 92, 100)}
	   .right{ height: 500px; padding-left:150px; height: 100%;
	   .banner{ height: 50px; border-bottom:  solid 2px #eee;
	   .user_item{float: right; padding: 15px 30px 0 0; 
		 .el-dropdown-link {cursor: pointer; color: #409EFF; }
		 }
	   }
	 
	 }
	
}
</style>