<template>
	<v-layout>
		<v-flex xl6>
			<panel title="Song Metadata">
				<div>
					{{ song.title }}
					{{song.artist}}
				</div>
				<div>
					{{song.album}}
				</div>
			</panel>
		</v-flex>
		<v-flex xl6>
			<panel title="Song Image">
				<div class="album-container">
					<img   class="album-image" :src="song.albumImageURL"/>
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
	data() {
		return {
			song: {}
		};
	},
	async mounted () {
		try {
			const songId = this.$store.state.route.params.songId;
			this.song = (await SongsService.show(songId)).data;
		}	catch (err) {
			console.log(err);
		}
	}
};
</script>

<style scoped>
.album-container + .image-album{
	text-align: right;
}
</style>
