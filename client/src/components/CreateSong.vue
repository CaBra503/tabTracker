<template>
	<v-layout>
		<v-flex xs-4>
			<panel title="Song Metadata">
				<v-text-field required
					:rules="[required]" 
					label="Title" 
					v-model="song.title">
				</v-text-field>
				<v-text-field required
					:rules="[required]" 
					label="Artist" 
					v-model="song.artist">
				</v-text-field>
				<v-text-field required
					:rules="[required]" 
					label="Album" 
					v-model="song.album">
				</v-text-field>
				<v-text-field required
					:rules="[required]" 
					label="Genre" 
					v-model="song.genre">
				</v-text-field>
				<v-text-field required
					:rules="[required]" 
					label="Album Image Url" 
					v-model="song.albumImageURL">
				</v-text-field>
				<v-text-field required
					:rules="[required]" 
					label="YouTube Id" 
					v-model="song.youtubeId">
				</v-text-field>
			</panel>
		</v-flex>
		<v-flex sm-8>
			<panel title="Song Structure">
				<v-text-field multi-line
					label="Lyrics" 
					v-model="song.lyrics">
				</v-text-field>
				<v-text-field multi-line
					label="Tabs" 
					v-model="song.tab">
				</v-text-field>
			</panel>
			<div class="danger-alert"
				v-if="error">{{ error }}
			</div>
			<v-btn class="cyan"
				@click="create">
					Create Song
			</v-btn>
		</v-flex>
	</v-layout>
</template>

<script>
import Panel from '@/components/Panel';
import SongsService from '@/services/SongsService';
export default {
	data () {
		return {
			song: {
				title: null,
				artist: null,
				album: null,
				genre: null,
				albumImageURL: null,
				youtubeId: null,
				lyrics: null,
				tab: null
			},
			error: null,
			required: (value) => !!value || 'Required.'
		};
	},
	methods: {
		async create () {
			this.error = null;
			const areAllFieldsFull = Object.keys(this.song).every(key => !!this.song[key]);
			if(!areAllFieldsFull){
				this.error = 'Please fill in the fields';
			}
			try {
				await SongsService.post(this.song);
				console.log('songs Created');
				this.$router.push({
					name: 'songs'
				});
			} catch (err){
				console.log(err);
			}
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
};
</script>

<style scoped>
.input-group__input {
	border-bottom: 1px black solid;
}

</style>
