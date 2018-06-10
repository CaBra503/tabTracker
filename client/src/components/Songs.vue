
<template>
	<v-layout>
		<v-flex sm6 offset-sm3>
			<panel title="Songs">
				<div 
				v-for="song in songs" :key="song.id">
					{{song.title}}
					{{song.album}}
					{{song.artist}}
				</div>
			</panel>
		</v-flex>
	</v-layout>
</template>
	

<script>
import SongsService from '@/services/SongsService';
import Panel from '@/components/Panel';
export default {
	components: {
		Panel
	},
	metaInfo: {
		title: 'Songs',
		titleTemplate: (titleChunk) => {
			return titleChunk ? `${titleChunk} | Guitar Tab Tracker` : 'Tab Tracker';
		}
	},data () {
		return {
			songs: null
		};
	},
	async mounted () {
		this.songs = (await SongsService.index()).data;
		console.log('songs: ', this.songs);
	}
};
</script>
<!-- Add 'scoped " attribute to limit CSS to this component only -->
<style scoped>

</style>
