<script lang="ts" setup>
const liensEcole = ref([
	{
		key: "Hyperplanning",
		name: "Hyperplanning",
		url: "https://planning.divtec.ch/hp",
		icon: "https://cas2.divtec.ch:4443/cas/favicon.ico"
	},
	{
		key: "ModulBaukasten",
		name: "Plan modulaire",
		url: "https://www.ict-berufsbildung.ch/services/modulbaukasten",
		icon: "https://www.ict-berufsbildung.ch/favicon.ico"
	},
	{
		key: "Divtec",
		name: "Divtec",
		url: "https://www.divtec.ch/",
		icon: "https://www.divtec.ch/favicon.ico"
	}
]);

const liensExternes = ref([
	{
		key: "VSCode",
		name: "Installateur VSCode",
		url: "https://code.visualstudio.com/download",
		icon: "https://code.visualstudio.com/favicon.ico",
	},
	{
		key: "Infomaniak",
		name: "Manager infomaniak",
		url: "https://manager.infomaniak.com/",
		icon: "https://manager.infomaniak.com/v3/assets/favicon/favicon-16x16.png"
	},
]);
</script>

<template>
	<div>
		<h1>Liens utiles</h1>
		<div>
			<h2>Liens de l'école</h2>
			<ul>
				<li v-for="link in liensEcole" :key="link.key">
					<NuxtLink :to="link.url" target="_blank">
						<img height="12px" :src="link.icon" :alt="'icône' + link.key" />
						{{ link.name }}
					</NuxtLink>
				</li>
			</ul>
			<h2>Liens externes</h2>
			<ul>
				<li v-for="link in liensExternes" :key="link.key">
					<NuxtLink :to="link.url" target="_blank">
						<img height="12px" :src="link.icon" :alt="'icône' + link.key" />
						{{ link.name }}
					</NuxtLink>
				</li>
			</ul>
		</div>
	</div>
</template>
