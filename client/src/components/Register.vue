 /*eslint-disable*/
<template>
	<div class="register">
		<h1>Register</h1>
		<h2>For my Vue JS app.</h2>

		<input
		type="email"
		name="email"
		v-model="email"
		placeholder="email" />
	<br>
		<input
		type="password"
		name="password"
		v-model="password"
		placeholder="password" /> 
		<br>
		<button 
		@click="register">
			Register
			</button>
	</div>
</template>
	

<script>			
import AuthenticationService from '@/services/AuthenticationService';
export default {
	name: 'Register',
	data () {
		return {
			email: '',
			password: ''
		};
	},
	methods: {
		//eslint-disable-next-line
		async register() {
			const response = await AuthenticationService.register({
				email: this.email,
				password: this.password
			});
			console.log(response.data);
		}
	}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
