<template>
	<panel title="Song Metadata" class="song-container">
	<v-layout>
		<v-flex>
		<div>
			<div class="song-title">
			{{song.title}}
			</div>
			<div class="song-artist">
			{{song.artist}}
			</div>
		</div>
		<div>
			<img class="album-image" :src="song.albumImageURL" />
			<br>
			<span class="album-title">
			{{song.album}}
			</span>
		</div>
		</v-flex>
	</v-layout>
	</panel>
</template>

<script>
import Panel from '@/components/Panel';
export default {
	props: [
		'song'
	],
	components:{
		Panel
	},
};
</script>

<style scoped>
.container{
	padding-top: 20px;
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
	top: -2292px;
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

}
</style>
