<template>
	<panel class="youtube" title="YouTube Video">
		<youtube :video-id="youtubeId"
		:player-width="185"
		:player-height="320"></youtube>
	</panel>
</template>

<script>
import Panel from '@/components/Panel';

export default {
	props:[
		'youtubeId'
	],
	components: {
		Panel
	}
};
</script>

<style>

</style>
