<script setup lang="ts">
	const people = [
		"Odin",
		"Chloé",
		"Xavier",
		"Maximilien",
		"Mathilde",
		"Ethan",
		"Michaël",
		"Rayan"
	]
</script>

<template>
	<h1>Planning du balai</h1>
	<div class="table">
		<div>Personne</div>
		<div v-for="week in 39">{{week}}</div>
		<template v-for="person in people" :key="person">
			<div>{{person}}</div>
			<div v-for="week in 39"></div>
		</template>

	</div>
</template>

<style>
.table {
	display: grid;
	grid-template-columns: repeat(40, 1fr);
	grid-template-rows: repeat(8, 1fr);
	text-align: center
}

.table>div {
	display: grid;
}
</style>
