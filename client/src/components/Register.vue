 /*eslint-disable*/
<template>
	<v-layout row>
		<v-flex xs6 offset-xs3>
			<div class="grey elevation-3 ml-5 mr-5">
				<v-toolbar flat dense class="cyan" dark>
					<v-toolbar-title class="title" style="">Register</v-toolbar-title>
				</v-toolbar>

				<div class="pl-5 pr-5 pb-1 pt-1">
					<input
						class="mt-2 mb-2"
						type="email"
						name="email"
						v-model="email"
						placeholder="email" />
					<br>
					<input
						class="mt-2"
						type="password"
						name="password"
						v-model="password"
						placeholder="password" /> 
					<br>
					<div class="error" v-html="error" />
					<br>
					<v-btn class="cyan" 
					@click="register">
						Register
					</v-btn>
				</div>
			</div>
		</v-flex>
	</v-layout>
</template>
	

<script>			
import AuthenticationService from '@/services/AuthenticationService';
export default {
	name: 'Register',
	data () {
		return {
			email: '',
			password: '', 
			error: null
		};
	},
	methods: {
		//eslint-disable-next-line
		async register () {
			try {
				await AuthenticationService.register({
					email: this.email,
					password: this.password,
				}); 
			} catch (error) {
				this.error = error.response.data.error;
			}
		}
	}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
	color: red;
}
.title{
	position:relative;
	right: -250px;
	bottom: 0px;
	font-weight: bold;
	font-size: 14px;
}
[type=email]{
	border:1px solid black;
	background-color: white;
	color: black;
	font-weight: bold;
}
[type=password]{
	border:1px solid black;
	background-color: white;
	color: black;
	font-weight: bold;
}
</style>
