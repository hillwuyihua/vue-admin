<template>
  <div style=" padding: 10px;">
	  
	 请输入密码：
  <el-input v-model="input" placeholder="请输入密码" size="small" style="width: 30%;"></el-input>
   
  </div>
</template>
<style>
	.manuTree>div{ overflow: hidden;}
</style>
<script>

export default {
  name: 'password',

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
