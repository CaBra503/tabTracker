<template>
	<v-flex>
		<panel title="Lyrics" class="lyrics" light>
			<textarea readonly v-model="song.lyrics"></textarea>
		</panel>
	</v-flex>
</template>
<script>
import Panel from '@/components/Panel';
export default {
	props: [
		'song'
	],
	components: {
		Panel
	}
};
</script>
<style>
textarea {
	width: 100%;
	font-family: monospace;
	border: none;
	height: 600px;
	border-style: none;
	border-color: transparent;
	overflow: auto;
	padding: 40px;
}
</style>