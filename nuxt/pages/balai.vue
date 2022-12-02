<script setup lang="ts">
let fait = ref(new Map<string, boolean[]>());
let personnes = ref<string[]>();
let loaded = ref(false);
let error = ref(false);
const main = async () => {
	try {
		let done = (await $fetch("/api/balai")).body.fait;
		for (let [key, value] of Object.entries(done)) {
			fait.value.set(key, value);
		}
		personnes.value = (await $fetch("/api/balai")).body.noms;
	} catch (e) {
		error.value = true;
		console.error(e);
	}
	loaded.value = true;
};
main();
</script>

<template>
	<div class="page">
		<div class="section">
			<div class="row row-1">
				<div class="column">
					<h1>Planning du balai</h1>
				</div>
			</div>
			<div class="row row-1">
				<div class="column">
					<div v-if="error">
						<p>Une erreur est survenue lors du chargement des données.</p>
						<p>Veuillez contacter dindin|nibnib, en fournissant les logs de la console.</p>
					</div>
					<div class="table" v-else-if="loaded">
						<div>Personne</div>
						<div v-for="week in 39">{{ week }}</div>
						<template v-for="person in personnes" :key="person">
							<div>{{ person }} - {{ fait.get(person)?.filter((v: boolean) => v).length }}</div>
							<input type="checkbox" v-for="week in 39" :key="week" :checked="fait.get(person)?.at(week)" />
						</template>
					</div>
					<div v-else>
						Chargement...
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
h1 {
	margin-bottom: 0;
}

.table {
	display: grid;
	grid-template-columns: 100px repeat(39, 1fr);
	grid-template-rows: repeat(8, 1fr);
	text-align: center;
	align-items: center;
}

.table {
	>* {
		height: fit-content;
	}
}

.table {
	>input {
		height: 30px;
	}
}

input[type=checkbox] {
	pointer-events: none
}
</style>
