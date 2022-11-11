<script setup lang="ts">
import Datepicker from "@vuepic/vue-datepicker";
import '@vuepic/vue-datepicker/dist/main.css';
import { toTypeDeclarationFile } from "unimport";

const TEMPS_TRAVAIL_MINIMUM = { hours: 7, minutes: 25 };
const MINUTES_TRAVAIL_MINIMUM = TEMPS_TRAVAIL_MINIMUM.hours * 60 + TEMPS_TRAVAIL_MINIMUM.minutes;

let noteText = ref(""), coeffText = ref(""); /* Créé les variables noteText et coeffText, 
																						    utilisées pour récupérer les valeurs des champs de saisie */

let notes = ref<{ note: number; coefficient: number; }[]>([]); // Créé un tableau de notes réactives
let moyenne = ref(0); // Créé une moyenne réactive

let heureArrivee = ref({ hours: 0, minutes: 0 }); // Créé une heure d'arrivée réactive

let heureDebutPause = ref({ hours: 0, minutes: 0 }); // Créé une heure de début de pause réactive

let heureFinPause = ref({ hours: 0, minutes: 0 }); // Créé une heure de fin de pause réactive

let heureDepart = ref({ hours: 0, minutes: 0 }); // Créé une heure de départ réactive

let pauseApresMidi = ref(false); // Créé une pause après-midi réactive

let totalMatin = computed(() => heureDebutPause.value.hours * 60 + heureDebutPause.value.minutes - heureArrivee.value.hours * 60 - heureArrivee.value.minutes); // Créé un total de temps passé le matin réactif

let totalApresMidi = computed(() => (heureDepart.value.hours * 60 + heureDepart.value.minutes - heureFinPause.value.hours * 60 - heureFinPause.value.minutes) - (pauseApresMidi.value ? 10 : 0)); // Créé un total de temps passé l'après-midi réactif

let total = computed(() => totalMatin.value + totalApresMidi.value); // Créé une variable total

let texteTempsRelatif = computed(() => total.value - MINUTES_TRAVAIL_MINIMUM < 0 ? "Perdu" : "Gagné"); // Créé une variable texteTempsRelatif

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
		<div class="section">
			<div class="row row-1">
				<div class="column">
					<h1>Calculateurs</h1>
				</div>
			</div>
		</div>
		<div class="section">
			<div class="row row-1">
				<div class="column">
					<h2>Heures</h2>
				</div>
			</div>
			<div class="row row-1_2">
				<div class="column">
					<div>
						<div class="align-bottom">
							<div>
								<h3>Arivée</h3>
								<Datepicker timePicker v-model="heureArrivee" textInput autoApply :clearable="false" />
							</div>
							<div class="horizontal full-width">
								<h3>Pause</h3>
								<div>
									<div>
										<h4>Début</h4>
										<Datepicker timePicker v-model="heureDebutPause" textInput autoApply :clearable="false" />
									</div>
									<div>
										<h4>Fin</h4>
										<Datepicker timePicker v-model="heureFinPause" textInput autoApply :clearable="false" />
									</div>
								</div>
							</div>
							<div>
								<h3>Départ</h3>
								<Datepicker timePicker v-model="heureDepart" textInput autoApply :clearable="false" />
							</div>
						</div>
						<div>
							<label>
								<input type="checkbox" v-model="pauseApresMidi">
								Pause de l'après-midi
							</label>
						</div>
					</div>
				</div>
				<hr>
				<div class="column resultat">
					<h3>Resultat</h3>
					<h4>Travail aujourd'hui</h4>
					<p>{{ total / 60 >= 0 ? Math.floor(total / 60) : Math.ceil(total / 60) }}h {{ total % 60 }}min</p>
					<div class="center">
						<h5>Matin</h5>
						<p>{{ totalMatin / 60 >= 0 ? Math.floor(totalMatin / 60) : Math.ceil(totalMatin / 60) }}h {{ totalMatin
								% 60
						}}min</p>
					</div>
					<div>
						<h5>Après-midi</h5>
						<p>{{ totalApresMidi / 60 >= 0 ? Math.floor(totalApresMidi / 60) : Math.ceil(totalApresMidi / 60) }}h {{
								totalApresMidi % 60
						}}min</p>
					</div>
					<h4>{{ texteTempsRelatif }}</h4>
					<p>{{ Math.abs((total - MINUTES_TRAVAIL_MINIMUM) / 60 >= 0
							? Math.floor((total - MINUTES_TRAVAIL_MINIMUM) / 60)
							: Math.ceil((total - MINUTES_TRAVAIL_MINIMUM) / 60))
					}}h {{ Math.abs((total - MINUTES_TRAVAIL_MINIMUM) % 60) }}min</p>
				</div>
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
				<span>{{ moyenne }}</span>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.full-width {
	width: 100%;
}

.horizontal {
	&.full-width {
		:not(div):not(.dp__main *) {
			margin-left: 10px;
			margin-right: 10px;
		}

		div {
			width: 100%;
			margin-left: 0;
			margin-right: 0;
		}

		justify-content: space-between;
	}

	display: flex;
	flex-direction: row;
	column-gap: 10px;
	align-items: center;
}

h1+h2+div {
	max-width: max(calc(100%/3), 500px);

	div:not(.horizontal) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	>.horizontal {
		>div {
			border: solid 1px #8080803d;
			height: 160px;
		}
	}
}

.align-bottom {
	align-items: flex-end;
}

.resultat {
	p {
		font-size: 16px;
	}
}
</style>
