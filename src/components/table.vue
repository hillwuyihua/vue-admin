<template>
  <div style=" padding: 10px;">
	  
	  T1页面
  <el-input v-model="input" placeholder="T1页面" size="small" style="width: 30%;"></el-input>
   
  </div>
</template>
<style>
	.manuTree>div{ overflow: hidden;}
</style>
<script>

export default {
  name: 'table',

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
