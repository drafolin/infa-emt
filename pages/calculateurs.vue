<script setup lang="ts">
let noteText = ref(""), coeffText = ref(""); /* Créé les variables noteText et coeffText, 
																						    utilisées pour récupérer les valeurs des champs de saisie */

let notes = ref<{ note: number; coefficient: number; }[]>([]); // Créé un tableau de notes réactives
let moyenne = ref(0); // Créé une moyenne réactive

onMounted(() => {
	notes.value = JSON.parse(localStorage.getItem("notes") || "[]"); // Récupère les notes sauvegardées dans le localStorage
});

const calcMoyenne = (): number => {
	let sommeNotes = 0, sommeCoeff = 0;
	for (let i = 0; i < notes.value.length; i++) {
		sommeNotes += notes.value[i].note * notes.value[i].coefficient;
		sommeCoeff += notes.value[i].coefficient;
	}

	if (sommeCoeff == 0) return 0;
	return sommeNotes / sommeCoeff;
};

const addNote = () => { // Créé une fonction addNote
	let note = parseFloat(noteText.value); // Récupère la valeur de noteText
	let coeff = parseFloat(coeffText.value); // Récupère la valeur de coeffText

	if (isNaN(note) || isNaN(coeff)) { // Si note ou coeff n'est pas un nombre
		alert("Veuillez entrer des nombres valides"); // Affiche une alerte
		return; // Arrête l'exécution de la fonction
	}

	notes.value.push({ // Ajoute une note au tableau notes
		note: note, // note: note
		coefficient: coeff // coefficient: coeff
	});

	noteText.value = ""; // Réinitialise noteText
	coeffText.value = ""; // Réinitialise coeffText

	moyenne.value = calcMoyenne(); // Calcule la moyenne

	localStorage.setItem("notes", JSON.stringify(notes.value)); // Sauvegarde les notes dans le localStorage
};

const removeNote = (index: number) => { // Créé une fonction removeNote
	notes.value.splice(index, 1); // Supprime la note à l'index donné

	moyenne.value = calcMoyenne(); // Calcule la moyenne

	localStorage.setItem("notes", JSON.stringify(notes.value)); // Sauvegarde les notes dans le localStorage
};
</script>

<template>
	<div>
		<h1>Calculateurs</h1>
		<h2>Heures</h2>
		<hr />

		<h2>Moyennes</h2>
		<input type="text" placeholder="Note" v-model="noteText"> -
		<input type="text" placeholder="Coefficient" v-model="coeffText">%
		<button @click="addNote">Ajouter</button>
		<ul>
			<li v-for="note, index in notes">
				<button @click="() => { removeNote(index); }">X</button>
				<!--/* Utilisation d'une fonction anonyme pour passer un paramètre*/-->
				{{ note.note }} - {{ note.coefficient }}%
			</li>
		</ul>
		<span>Moyenne: {{ moyenne }}</span>
	</div>
</template>

<style>
</style>
