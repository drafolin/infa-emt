<script lang="ts" setup>

</script>

<template>
	<div>
		<h1>Liens utiles</h1>
		<div>
			<ul>
				<li v-for="link in links" :key="link.key">
					<NuxtLink :to="link.url" target="_blank">
						<img height="12px" :src="link.icon" :alt="'icône' + link.key" />
						{{ link.name }}
					</NuxtLink>
				</li>
			</ul>
		</div>
	</div>
</template>
