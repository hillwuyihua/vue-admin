<template>
  <div>

 <div v-for="(item,i) in list">
      <el-menu-item v-if="item.children.length==0" :index="item.name">
        <span slot="title">{{item.text}}</span>
      </el-menu-item>
      <el-submenu  v-if="item.children.length>0" :index="item.name" >
        <template slot="title"> <span>{{item.text}}</span> </template>
       <left_tree :list="item.children" ></left_tree> 
      </el-submenu>
    </div> 



   
  </div>
</template>

<script>
import left_tree from './left_tree'	
export default {
 name: 'left_tree', //重点：用于菜单无限级，要指定name，否则就会报错
 components: {left_tree},
  props: ['list'],
  data () {
    return {
	
		 }
  },
	methods: {
	
	},
	 created(){
	
      
  }, 
	mounted: function () {
		 
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">


</style>
