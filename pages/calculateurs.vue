<script setup lang="ts">
import Datepicker from "@vuepic/vue-datepicker";
import '@vuepic/vue-datepicker/dist/main.css';

let noteText = ref(""), coeffText = ref(""); /* Créé les variables noteText et coeffText, 
																						    utilisées pour récupérer les valeurs des champs de saisie */

let notes = ref<{ note: number; coefficient: number; }[]>([]); // Créé un tableau de notes réactives
let moyenne = ref(0); // Créé une moyenne réactive

let heureArrivee = ref({ hours: 0, minutes: 0 }); // Créé une heure d'arrivée réactive

let heureDebutPause = ref({ hours: 0, minutes: 0 }); // Créé une heure de début de pause réactive

let heureFinPause = ref({ hours: 0, minutes: 0 }); // Créé une heure de fin de pause réactive

let heureDepart = ref({ hours: 0, minutes: 0 }); // Créé une heure de départ réactive

let heuresBase = ref({ hours: 0, minutes: 0 }); // Créé les heures de base réactives

let total = computed(() => {
	let minutesDepart = heureDepart.value.hours * 60 + heureDepart.value.minutes;
	let minutesArrivee = heureArrivee.value.hours * 60 + heureArrivee.value.minutes;
	let minutesDebutPause = heureDebutPause.value.hours * 60 + heureDebutPause.value.minutes;
	let minutesFinPause = heureFinPause.value.hours * 60 + heureFinPause.value.minutes;

	return minutesDepart - minutesArrivee - (minutesFinPause - minutesDebutPause);
}); // Créé une variable total

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
			<h3>Heures actuelles</h3>
			<Datepicker timePicker v-model="heuresBase" />
			<div class="horizontal">
				<div>
					<h3>Arivée</h3>
					<Datepicker timePicker v-model="heureArrivee" />
				</div>

				<div>
					<h3>Pause</h3>
					<div class="horizontal">
						<div>
							<h4>Début</h4>
							<Datepicker timePicker v-model="heureDebutPause" />
						</div>
						<div>
							<h4>Fin</h4>
							<Datepicker timePicker v-model="heureFinPause" />
						</div>
					</div>
				</div>

				<div>
					<h3>Départ</h3>
					<Datepicker timePicker v-model="heureDepart" />
				</div>
			</div>

			<hr>
			<h3>Resultat</h3>
			<h4>Travail aujourd'hui</h4>
			<p>{{ Math.floor(total / 60) }}h {{ total % 60 }}min</p>
			<h4>Gagné</h4>
			<p>{{ Math.floor((total - 450) / 60) }}h {{ (total - 450) % 60 }}min</p>
			<h4>Total</h4>
			<p>{{ Math.floor((total-450) / 60) }}h {{ (total - 450) % 60 }}min
			</p>
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
			<span>{{moyenne }}</span>
		</div>
	</div>
</template>

<style>
.horizontal {
	display: flex;
	flex-direction: row;
	column-gap: 10px;
	align-items: center;
}

h1+h2+div div:not(.horizontal) {
	display: flex;
	flex-direction: column;
	align-items: center;
}

h1+h2+div {
	max-width: calc(100%/3);
}

h3 {
	text-align: center;
}

h1+h2+div>.horizontal>div {
	border: solid 1px #8080803d;
	height: 160px;
}
</style>
