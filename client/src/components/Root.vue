<template>
<!-- eslint-disable -->
	<div class="hello">
		<h1>{{ msg }}</h1>
		<h2>Essential Links</h2>
		<ul>
			<li>
				<a href="https://github.com/cabra503/" target="_blank">
				<strong>Creators Github</strong>
				</a>
			</li>
			<li>
				<a
					href="https://twitter.com/PdxDev503"
					target="_blank">
					<strong> Creators Twitter!</strong>
				</a>
			</li>
			<br>
			<li>
				<a
					href="https://vuejs.org"
					target="_blank"
				>
					Core Docs
				</a>
			</li>
			<li>
				<a
					href="https://forum.vuejs.org"
					target="_blank"
				>
					Forum
				</a>
			</li>
			<li>
				<a
					href="https://chat.vuejs.org"
					target="_blank"
				>
					Community Chat
				</a>
			</li>
			<li>
				<a
					href="https://twitter.com/vuejs"
					target="_blank"
				>
					Twitter
				</a>
			</li>
			<br>
			<li>
				<a
					href="http://vuejs-templates.github.io/webpack/"
					target="_blank"
				>
					Docs for This Template
				</a>
			</li>
		</ul>
		<br>
		<h2>Ecosystem</h2>
		<ul>
			<li>
				<a href="http://router.vuejs.org/" target="_blank" >
						vue-router
				</a>
			</li>
			<li>
				<a href="http://vuex.vuejs.org/" target="_blank">
					vuex
				</a>
			</li>
			<li>
				<a href="http://vue-loader.vuejs.org/" target="_blank">
					vue-loader
				</a>
			</li>
			<li>
				<a href="https://github.com/vuejs/awesome-vue" target="_blank">
					awesome-vue
				</a>
			</li>
			<br>
			<h3>Built with</h3>
			<br>
			<li>
				<a href="https://github.com/vuejs/awesome-vue" target="_blank">
					Node
				</a>
			</li>
			<li>
				<a href="https://github.com/vuejs/awesome-vue" target="_blank">
					Express
				</a>
			</li>
			<li>
				<a href="https://github.com/vuejs/awesome-vue" target="_blank">
					Vue
				</a>
			</li>
			<li>
				<a href="https://github.com/vuejs/awesome-vue" target="_blank">
					MySQL
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Root',
	metaInfo:{
		title: 'Root',
		titleTemplate: (titleChunk) => {
			return titleChunk ? `${titleChunk} | Guitar Tab Tracker` : 'Tab Tracker';
		}
	},
	data () {
		return {
			msg: 'Guitar Tab Tracker'
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
	font-weight: normal;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
