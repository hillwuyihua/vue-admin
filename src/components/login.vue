<template>
    <div class="login-vue" :style="bg">
		  <div class="container">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm">
			   <el-form-item label="用户名:" prop="name" >
				<el-input v-model="ruleForm.name" size="small"></el-input>
			  </el-form-item>
			  <el-form-item label="密码" prop="password">
				<el-input v-model="ruleForm.password" size="small" type="password"></el-input>
			  </el-form-item>

			  <el-form-item>
				  
				<el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
				<el-button @click="resetForm('ruleForm')">重置</el-button>
			  </el-form-item>
			</el-form>
		</div>
    </div>
</template>

<script>
export default {
    name: 'login',
	
    data() {
		
        return {
          ruleForm: {
          name:'admin',
          password: 'admin',
     
        },
          bg: {},
		 rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'change' }
          ],
       
        }
        }
    },
    created() {
		
        this.bg.backgroundImage = 'url(' + require('../assets/imgs/bg0' + new Date().getDay() + '.jpg') + ')'
    },
    watch: {
        $route: {
            handler: function(route) {
				console.log(route)
              //  this.redirect = route.query && route.query.redirect
            },
          
        }
    },
    methods: { 
		submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            
			localStorage.setItem('token', 'i_am_token')
			this.$router.push({path: '/'})
			
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
		  
		
        this.$refs[formName].resetFields();
		  this.ruleForm.name=""
		  this.ruleForm.password=""
		  console.log( this.ruleForm)
		
      }
    },
	mounted() {
		
	}
}
</script>
<style>
	.login-vue .el-input--small .el-input__inner{ background: none;}
</style>
<style scoped="">

.login-vue {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}
.login-vue .container {
    background: rgba(255, 255, 255, .5);
    width: 330px;
    text-align: center;
    border-radius: 10px;
    padding: 30px;
}
.login-vue .ivu-input {
    background-color: transparent;
    color: #fff;
    outline: #fff;
    border-color: #fff;
}
.login-vue ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color: rgba(255, 255, 255, .8);
}
.login-vue :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: rgba(255, 255, 255, .8);
}
.login-vue ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: rgba(255, 255, 255, .8);
}
.login-vue :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: rgba(255, 255, 255, .8);
}
.login-vue .title {
    font-size: 16px;
    margin-bottom: 20px;
}
.login-vue .input-c {
    margin: auto;
    width: 200px;
}
.login-vue .error {
    color: red;
    text-align: left;
    margin: 5px auto;
    font-size: 12px;
    padding-left: 30px;
    height: 20px;
}
.login-vue .submit {
    width: 200px;
}
.login-vue .account {
    margin-top: 30px;
}
.login-vue .account span {
    cursor: pointer;
}
.login-vue .ivu-icon {
    color: #eee;
}
.login-vue .ivu-icon-ios-close-circle {
    color: #777;
}
</style>


