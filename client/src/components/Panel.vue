
<template>
		<v-container fluid>
			<v-layout>
				<v-flex xs12 sm6 offset-sm3>
					<div class="white elevation-6">
						<v-flex>
							<v-toolbar dense class="light-blue accent-2">
								<v-toolbar-title>
									{{title}}
								</v-toolbar-title>
								<slot name="action" />
							</v-toolbar>

						</v-flex>
						<div class="pl-5 pr-5 pb-1 pt-1">
							<slot>
								no songs defined
							<!-- Content injeted from Songs.vue -->
							</slot>
						</div>
					</div>
				</v-flex>
			</v-layout>
		</v-container>
</template>
	

<script>
export default {
	props: [
		'title'
	],
};
</script>
<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>

</style>
