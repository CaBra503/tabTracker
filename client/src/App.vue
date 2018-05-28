<template>
	<div id="app">
		<v-app>
			<page-header />
			<main>
				<v-container fluid>
					<router-view></router-view>
				</v-container>
			</main>
		</v-app>
	</div>
</template>

<script>
import PageHeader from '@/components/Header.vue';
export default {
	name: 'App',
	components: {
		PageHeader
	},
};
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
.aquamarine {
	background-color: rgb(101, 224, 255);
}
.input-group--text-field input {
	
}
.toolbar__title {
	color: white;
}

.btn__content{
	color: #fff;
}
.email.input-group {
	position: relative;
	top: 0px;
	left: 0;
	height: 50px;
}
.password.input-group {
	position: relative;
	top: 0px;
	left: 0;
	height: 50px;
	
}
.title {
	font-weight: bold;
	color: white;
	vertical-align: middle;
	margin: auto;
	}
</style>
