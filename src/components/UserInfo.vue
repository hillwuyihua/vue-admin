<template>
  <div style=" padding: 10px;">
	  
	 用户中心：
  <el-input v-model="input" placeholder="用户中心" size="small" style="width: 30%;"></el-input>
   
  </div>
</template>
<style>
	.manuTree>div{ overflow: hidden;}
</style>
<script>

export default {
  name: 'userinfo',
  data () {
    return {
		 input: ''	
		}
  },
	methods: {
	
	},
	 created(){
		  
     

			/* this.$http.get("/api.php/h5/index/getRecommend").then(data=>{
       //  console.log(data)
      }) */
      
  }, 
	mounted: function () {
		 
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">


</style>
