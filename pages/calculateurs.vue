<script setup lang="ts">
let notes = ref<number[]>([]); // Reference to the array of numbers
</script>

<template>
	<div>
		<h1>Calculateurs</h1>
		<h2>Heures</h2>
		<hr />
		<h2>Moyennes</h2>
		<ul>
			<li v-for="note in notes">{{ note }}</li>
		</ul>
	</div>
</template>

<style>
</style>
