<script setup lang="ts">
let noteText = ref(""), coeffText = ref(""); /* Créé les variables noteText et coeffText, 
																						    utilisées pour récupérer les valeurs des champs de saisie */

let notes = ref<{ note: number; coefficient: number; }[]>([]); // Créé un tableau de notes réactives
let moyenne = ref(0); // Créé une moyenne réactive

let heureArrivee = ref(0); // Créé une heure d'arrivée réactive
let minuteArrivee = ref(0); // Créé une minute d'arrivée réactive

let heureDebutPause = ref(0); // Créé une heure de début de pause réactive
let minuteDebutPause = ref(0); // Créé une minute de début de pause réactive

let heureFinPause = ref(0); // Créé une heure de fin de pause réactive
let minuteFinPause = ref(0); // Créé une minute de fin de pause réactive

let heureDepart = ref(0); // Créé une heure de départ réactive
let minuteDepart = ref(0); // Créé une minute de départ réactive

let total = ref(0); // Créé un total réactif

const calculerTemps = () => { // Créé une fonction calculerTemps
	let debutPause = heureDebutPause.value * 60 + minuteDebutPause.value; // Créé une variable debutPause
	let finPause = heureFinPause.value * 60 + minuteFinPause.value; // Créé une variable finPause
	let arrivee = heureArrivee.value * 60 + minuteArrivee.value; // Créé une variable arrivee
	let depart = heureDepart.value * 60 + minuteDepart.value; // Créé une variable depart

	total.value = depart - arrivee - (finPause - debutPause); // Créé une variable total
};

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
		<div>
			<h3>Arivée</h3>
			<input type="number" v-model="heureArrivee" />:<input type="number" v-model="minuteArrivee" />

			<h3>Pause</h3>
			<div>
				<h4>Début</h4>
				<input type="number" v-model="heureDebutPause" />:<input type="number" v-model="minuteDebutPause" />
			</div>

			<div>
				<h4>Fin</h4>
				<input type="number" v-model="heureFinPause" />:<input type="number" v-model="minuteFinPause" />
			</div>

			<h3>Départ</h3>
			<input type="number" v-model="heureDepart" />:<input type="number" v-model="minuteDepart" />

			<h3>Resultat</h3>
			<button @click="calculerTemps">Calculer</button>
			<h4>Total</h4>
			<p>{{ Math.floor(total / 60) }}h {{ total % 60 }}min</p>
			<h4>Gagné</h4>
			<p>{{ Math.floor((total - 450) / 60) }}h {{ (total - 450) % 60 }}min</p>
		</div>
		<hr />

		<h2>Moyennes</h2>
		<div>
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
	</div>
</template>

<style>
</style>
