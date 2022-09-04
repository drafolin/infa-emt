<script setup lang="ts">

let fait = ref((await $fetch("/api/balai")).body.fait)

let personnes = ref<string[]>((await $fetch("/api/balai")).body.noms)

const toggle = (personne: string, week: number) => {
	let temp = fait.value[personne]
	temp[week] = !temp[week]
	fait.value[personne] = temp

	$fetch("/api/balai", {
		method: "POST",
		body: JSON.stringify({
			nom: personne,
			week: week,
			fait: fait.value[personne][week]
		})
	})
}

const disabled = (personne: string, week: number) => {
	if(fait.value[personne][week]) {
		return false
	}
	let count = 0
	for (let k in fait.value) {
		if (k !== personne) {
			if (fait.value[k][week]) count++
		}
	}
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
			<template v-for="person in personnes" :key="person">
				<div>{{person}} - {{fait[person].filter(v=>v).length}}</div>
				<input type="checkbox" v-for="week in 39" :key="week" :disabled="disabled(person, week)"
					:checked="fait[person][week]" @click="() => {toggle(person, week)}" />
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

.table>* {
	height: 40px;
}
</style>
