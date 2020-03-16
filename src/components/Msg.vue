<template>
  <div style=" padding: 10px;">
	  
	 MSG：错误提示页面
  <el-input v-model="input" placeholder="错误提示页面" size="small" style="width: 30%;"></el-input>
   
  </div>
</template>
<style>
	.manuTree>div{ overflow: hidden;}
</style>
<script>

export default {
  name: 'msg',
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
