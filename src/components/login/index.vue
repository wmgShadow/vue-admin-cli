<template>
  	<div class="login_page fillcontain">
	  	<transition name="form-fade" mode="in-out">
	  		<section class="form_contianer" v-show="showLogin">
		  		<div class="manage_tip">
		  			<p>elm后台管理系统</p>
		  		</div>
		    	<el-form :model="loginForm" :rules="rules" ref="loginForm">
					<el-form-item prop="username">
						<el-input  :model="loginForm.username"  placeholder="用户名" ></el-input>
					</el-form-item>
					<el-form-item prop="password">
						<el-input  :model="loginForm.password" type="password" placeholder="密码" ></el-input>
					</el-form-item>
					<el-form-item>
				    	<el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登陆</el-button>
				  	</el-form-item>
				</el-form>
				<p class="tip">温馨提示：</p>
				<p class="tip">未登录过的新用户，自动注册</p>
				<p class="tip">注册过的用户可凭账号密码登录</p>
	  		</section>
	  	</transition>
  	</div>
</template>

<script>

	import {mapActions, mapState} from 'vuex'

	export default {
	    data(){
			return {
				loginForm: {
					username: '',
					password: '',
				},
				input:'',
				rules: {
					username: [
			            { required: true, message: '请输入用户名', trigger: 'blur' },
			        ],
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' }
					],
				},
				showLogin: false,
			}
		},
		mounted(){
			this.showLogin = true;
			// if (!this.adminInfo.id) {
    		// 	this.getAdminData()
    		// }
		},
		computed: {
			...mapState(['adminInfo']),
		},
		methods: {
			...mapActions(['getAdminData']),
		 submitForm(formName) {
			 this.$router.push('/index')
				// this.$refs[formName].validate(async (valid) => {
				// 	if (valid) {
				// 		const res = await login({user_name: this.loginForm.username, password: this.loginForm.password})
				// 		if (res.status == 1) {
				// 			this.$message({
		        //                 type: 'success',
		        //                 message: '登录成功'
		        //             });
				// 			this.$router.push('manage')
				// 		}else{
				// 			this.$message({
		        //                 type: 'error',
		        //                 message: res.message
		        //             });
				// 		}
				// 	} else {
				// 		this.$notify.error({
				// 			title: '错误',
				// 			message: '请输入正确的用户名密码',
				// 			offset: 100
				// 		});
				// 		return false;
				// 	}
				// });
			},
		},
		watch: {
			adminInfo: function (newValue){
				if (newValue.id) {
					this.$message({
                        type: 'success',
                        message: '检测到您之前登录过，将自动登录'
                    });
					this.$router.push('manage')
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	@import './index.less';
</style>
