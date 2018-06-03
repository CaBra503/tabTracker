
<template>
	<v-app>
		<v-container fluid>
			<v-layout>
				<v-flex xs12 sm6 offset-sm3>
					<div class="white elevation-6">
						<v-flex>
							<v-toolbar dense class="light-blue accent-2">
								<v-toolbar-title class="title">
									Guitar Tab Tracker Registration
								</v-toolbar-title>
							</v-toolbar>
						</v-flex>
						<div class="pl-5 pr-5 pb-1 pt-1">
							<form name="tab-tracker-register-form" autocomplete="off">
								<v-text-field class= "email" type = "email" hint="Enter a valid email" id="email" name="email" v-model="email" label="Email" />

								<br>

								<v-text-field class= "password" type= "password" hint="Enter a valid password" id="password" name="password" v-model="password" label="Password"
								autocomplete="new-password" />
							</form>
							<br>
							<div class="error mt-4" v-html="error" />
							<br>
							<v-btn large class="light-blue accent-2" @click="register">
								Register
							</v-btn>
						</div>
					</div>
				</v-flex>
			</v-layout>
		</v-container>
	</v-app>
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
					password: this.password
				});
			} catch (error) {
				this.error = error.response.data.error;
			}
		}
	}
};
</script>
<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>
.btn {
	color: #fff;
		text-shadow: #040507 1px 1px 0;

}
.title {
	color: #fff;
	text-shadow: #040507 1px 1px 0;
}



</style>
