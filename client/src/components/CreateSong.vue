<template>
	<div>
		<panel title="Song Metadata">
			<div class="pl-5 pr-5 pb-1 pt-1">
				<v-text-field 
				label="Title" 
				v-model="title"
			></v-text-field>
				<v-text-field 
				label="Artist" 
				v-model="artist"
				></v-text-field>
				<v-text-field 
				label="Album" 
				v-model="album"
				></v-text-field>
				<v-text-field 
				label="Genere" 
				v-model="genere"
				></v-text-field>
				<v-text-field 
				label="Album Image Url" 
				v-model="albumImageUrl"
				></v-text-field>
				<v-text-field 
				label="YouTube Id" 
				v-model="youtubeId">

				</v-text-field>
			</div>
		</panel>
	</div>
</template>

<script>
import Panel from '@/components/Panel';
export default {
	data () {
		return {
			title: null,
			artist: null,
			album: null,
			genre: null,
			albumImageURL: null,
			youtubeId: null,
			lyrics: null,
			tab: null
		}
	},
	components: {
		Panel
	},	metaInfo: {
		title: 'Create A Song',
		titleTemplate: (titleChunk) => {
			return titleChunk ? `${titleChunk} | Guitar Tab Tracker` : 'Tab Tracker';
		}
	}
}
</script>

<style scoped>
.input-group__input {
	border-bottom: 1px black solid;
}

</style>
