<template>
	<div id="app">
		<page-header />
		<main>
			<v-container fluid>
				<router-view />
			</v-container>
		</main>
	</div>
</template>

<script>
import PageHeader from '@/components/Header.vue';
export default {
	name: 'App',
	components: {
		PageHeader
	},
	metaInfo: {
		//sets icon for tabs
		link: [
			{
				rel:'icon',
				href:'https://vuejs.org/images/logo.png',
				type:'image/png',
				alt: 'Vue.js Icon'
			}
		]
	}
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
.error {
	background-color: rgb(255, 79, 79);
	color: white;
}
</style>
