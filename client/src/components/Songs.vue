
<template>
	<v-layout>
		<v-flex sm6 offset-sm3>
			<panel title="Songs">
				<v-btn 
				slot="action" 
				@click="navigateTo({name: 'songs-create'})"
				class="aquamarine accent-2"
				fab
				light
				small
				absolute
				right
				middle>
					<v-icon> add </v-icon>
				</v-btn>
				<div 
				v-for="song in songs" :key="song.id">
				<v-layout>
					<v-flex xs6>
						<div class="song-title">
							{{song.title}}
						</div>
						<div class="song-artist">
							{{song.artist}}
						</div>
						<div class="song-genre">
							{{song.genre}}
						</div>
					</v-flex>
					<v-flex>
						<img class="album-image" :src="song.albumImageURL"/>
					</v-flex>
				</v-layout>
					<!-- {{song.title}}
					{{song.album}}
					{{song.artist}} -->
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
	},
	methods: {
		navigateTo (route) {
			this.$router.push(route);
		}
	},
	data () {
		return {
			
			songs: null
		};
	},
	async mounted () {
		this.songs = (await SongsService.index()).data;
	}
};
</script>
<!-- Add 'scoped " attribute to limit CSS to this component only -->
<style scoped>

</style>
