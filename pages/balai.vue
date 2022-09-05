<script setup lang="ts">
let fait = ref((await $fetch("/api/balai") as {body: {fait: Map<string, boolean[]>}}).body.fait)
let personnes = ref<string[]>((await $fetch("/api/balai") as {body: {noms:string[]}}).body.noms)
</script>

<template>
	<div class="page">
		<h1>Planning du balai</h1>
		<div class="table">
			<div>Personne</div>
			<div v-for="week in 39">{{week}}</div>
			<template v-for="person in personnes" :key="person">
				<div>{{person}} - {{fait[person].filter(v=>v).length}}</div>
				<input type="checkbox" v-for="week in 39" :key="week" :checked="fait[person][week]" />
			</template>
		</div>
	</div>
</template>

<style>
.table {
	display: grid;
	grid-template-columns: 100px repeat(39, 1fr);
	grid-template-rows: repeat(8, 1fr);
	text-align: center
}

.table>* {
	height: 40px;
}

input[type=checkbox] {
	pointer-events: none
}
</style>
