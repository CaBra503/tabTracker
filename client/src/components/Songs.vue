
<template>
	<v-layout app>
		<v-flex fluid>
			<panel title="Songs" lg-12>
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
				<div class="song"
				v-for="song in songs" :key="song.id">
				<v-layout>
					<v-flex md-6>
						<div class="song-title">
							{{song.title}}
						</div>
						<div class="song-artist">
							{{song.artist}}
						</div>
						<div class="song-genre">
							{{song.genre}}
						</div>
						<v-btn class="cyan"
						@click="navigateTo({
							name:'song',
							params: {
								songId: song.id
							}
							})">
							View Song
						</v-btn>
					</v-flex>
					<v-flex md-6>
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
.song {
	padding: 20px;
	/* height: 330px;
	width: 500px; */
	overflow: hidden;

}
.song-title{
	font-size: 30px;

}
.song-artist{
	font-size: 24px;

}
.song-genre{
	font-size: 18px;
}
.album-image { 
	/* width: 70%; */
	margin: 0 auto;
	padding: 50px 50px;
	position: relative;
	right: 0px;
	top: -25px;
}
</style>
