 <template>
<v-container grid-list-md text-xs-center fluid>
	<v-layout>
		<v-flex xs12>
			<song-metadata :song="song" />
		</v-flex>	
		<!-- <v-flex xs12>
			<lyrics :song="song" />
		</v-flex> -->
		<v-flex xs12>
			<you-tube :youtubeId="song.youtubeId" />
		</v-flex>
	</v-layout>
</v-container>
</template>


<script>
import SongMetadata from '@/components/ViewSong/SongMetadata';
import SongsService from '@/services/SongsService';
import Panel from '@/components/Panel';
import YouTube from './YouTube';
import Lyrics from './Lyrics';

export default {
	metaInfo: {
		title: 'Song Details',
		titleTemplate: (titleChunk) => {
			return titleChunk ? `${titleChunk} | View Song` : 'Song Details';
		}
	},
	components: {
		Panel,
		SongMetadata,
		YouTube,
		Lyrics
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
	},
};
</script>

<style scoped>
/* .container{
	padding-top: 20px;
}
.youtube {
	position: relative;
	bottom: 1990px;
	right: 390px;
	width: 100%;
	height: 100%;
}
 .song-container{
position: relative;
top: 0;
right: 290px;
}
.tabs{
	position:relative;
	top: -445px;
}
 .lyrics{
	position:relative;
	top: -550px;
	left: 680px;
} 
.song-artist{
	font-size: 24px;
}
.song-genre{
	font-size: 18px;
}
.song-image{
	width: 100%
}
.album-image { 
	width:  100%;
	margin: 0 auto;

} */
</style>
