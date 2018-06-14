
<template>
	<v-toolbar fixed dense class="light-blue">
		<v-toolbar-title class="ml-4">
			<span 
			class="home"
			@click="navigateTo({name: 'root'})">
			Tab Tracker
			</span>
		</v-toolbar-title>
		<v-toolbar-items>
<!--
TODO: Fix up Browse button
-->
				<v-btn 
				flat 
				light
				@click="navigateTo({name: 'songs'})" 
				class="ml-2">
				Browse
			</v-btn>
		</v-toolbar-items>
			<!-- TODO: Tie button to view user account -->
		<!-- <v-spacer><v-btn>Account</v-btn></v-spacer> -->
		<v-spacer></v-spacer>
		
		<v-toolbar-items>
			<v-btn
			flat
			dark
			v-if="!$store.state.isUserLoggedIn"
			@click="navigateTo({name: 'register'})">
				Sign Up
			</v-btn>

			<v-btn 
			flat
			dark
			v-if="$store.state.isUserLoggedIn"
			@click="navigateTo({name: 'logout'})">
				Logout
			</v-btn>
		
		</v-toolbar-items>
	</v-toolbar>
</template> 
	

<script>
export default {
	methods:{
		navigateTo (route) {
			this.$router.push(route);
		},
		logout () {
			this.$store.dispatch('setToken', null);
			this.$store.dispatch('setUser', null);
			//todo: redirect to homepage
			this.$router.push({
				name: 'root'
			});
		}
	}
};
</script>
<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>
.toolbar-title{
	text-shadow: #040507 1px 1px 0;
	color: #fff;
}

.white{
	color: #fff;
}

.home{
	cursor:pointer;
}
.home:hover{
	color: white; 
}
</style>
