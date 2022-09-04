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

let fait = ref(new Map<String, boolean[]>())

for (const personne of people) {
	for (let week = 0; week < 39; week++) {
		fait.value.set(personne, [...fait.value?.get(personne) || [], false])
	}
}

const toggle = (personne: string, week: number) => {
	let temp = fait.value.get(personne)
	temp[week] = !temp[week]
	fait.value.set(personne, temp)
}

const disabled = (personne: string, week: number) => {
	if(fait.value.get(personne)[week]) {
		return false
	}
	let count = 0
	fait.value.forEach((v, k) => {
		if (k !== personne) {
			if (v[week]) count++
		}
	})
	if (count > 2) {
		console.log("Parameters: ", personne, week, "Passed")
	}
	return count >= 2
}
</script>

<template>
	<div class="page">
		<h1>Planning du balai</h1>
		<div class="table">
			<div>Personne</div>
			<div v-for="week in 39">{{week}}</div>
			<template v-for="person in people" :key="person">
				<div>{{person}}</div>
				<input type="checkbox" v-for="week in 39" :key="week" :disabled="disabled(person, week)"
					:value="fait.get(person)[week]" @click="() => {toggle(person, week)}" />
			</template>
		</div>
	</div>
</template>

<style>
.table {
	display: grid;
	grid-template-columns: repeat(40, 1fr);
	grid-template-rows: repeat(8, 1fr);
	text-align: center
}
</style>
