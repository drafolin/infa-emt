<script lang="ts" setup>
useHead({
	title: 'INF2A',
	meta: [
		{
			name: 'description',
			content: 'Site de la classe INF2A'
		}
	],
	link: [
		{
			rel: 'favicon',
			content: '/favicon.ico'
		}
	]
});
</script>

<template>
	<NuxtLayout>
		<TheHeader />
		<NuxtPage />
		<TheFooter />
	</NuxtLayout>
</template>
