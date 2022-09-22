<script lang="ts" setup>
type Personne = {
	nom: string,
	prenom: string,
	tel: string,
	emails: string[],
	instagram?: string,
	discord?: string,
	snap?: string,
	dateNaissance: Date,
};

const eleves = ref<Personne[]>();
eleves.value = [{
	nom: "Beuchat",
	prenom: "Odin",
	tel: "079 844 29 28",
	emails: ["odin.beuchat@divtec.ch", "mail@dindin.ch"],
	discord: "dindin|nibnib#0621",
	dateNaissance: new Date("2006-10-05")
},
{
	nom: "Renaud",
	prenom: "Chloé",
	tel: "079 837 14 84",
	emails: ["chloe.renaud@divtec.ch", "crenaud206@gmail.com"],
	dateNaissance: new Date("2006-05-20"),
	instagram: "chl0e.rnd"
},
{
	nom: "Rossi",
	prenom: "Xavier",
	tel: "076 445 71 84",
	emails: ["xavier.rossi@divtec.ch"],
	dateNaissance: new Date("2000-08-06"),
	discord: "ArchMage, Avocat des enfers#7170"
},
{
	nom: "Moritz",
	prenom: "Maximilien",
	tel: "077 535 16 25",
	emails: ["maximilien.moritz@divtec.ch"],
	dateNaissance: new Date("2005-12-22"),
	discord: "Maxik22#8938"
},
{
	nom: "Demars",
	prenom: "Michaël-Elliott",
	tel: "079 933 43 25",
	emails: ["michael-elliott.demars@divtec.ch"],
	dateNaissance: new Date("2002-11-16"),
	discord: "Brätman#7088"
},
{
	nom: "Broquet",
	prenom: "Rayan",
	tel: "076 409 12 21",
	emails: ["rayan.broquet2@divtec.ch"],
	dateNaissance: new Date("2006-03-25"),
	discord: "tenemaullak#4516",
	instagram: "rayan_brqt"
},
{
	nom: "Mertz",
	prenom: "Mathilde",
	tel: "079 331 37 24",
	emails: ["mathilde.mertz@divtec.ch"],
	dateNaissance: new Date("2004-08-13"),
	discord: "Maitre Kébabier ツ | Mathy#7878"
},
{
	nom: "Knani",
	prenom: "Nael",
	tel: "079 431 00 02",
	emails: ["nael.knani@divtec.ch"],
	dateNaissance: new Date("2006-02-09"),
	discord: "᲼᲼᲼Alien᲼᲼᲼#0001"
},
{
	nom: "Ummel",
	prenom: "Ethan",
	tel: "078 746 46 18",
	emails: ["ethan.ummel@divtec.ch"],
	dateNaissance: new Date("2005-04-05")
}];
</script>

<template>
	<div>
		<ul class="liste-eleves">
			<li v-for="eleve in eleves">
				<span>{{ eleve.nom }} {{ eleve.prenom }}</span>
				<ul>
					<li>Telephone: <NuxtLink :to="'tel:' + eleve.tel">{{ eleve.tel }}</NuxtLink>
					</li>
					<li>eMails:
						<ul>
							<li v-for="email in eleve.emails">
								<NuxtLink :to="'mailto:' + email">{{ email }}</NuxtLink>
							</li>
						</ul>
					</li>
					<li v-if="eleve.discord">Discord: {{ eleve.discord }}</li>
					<li v-if="eleve.instagram">Instagram: <NuxtLink :to="`https://www.instagram.com/${eleve.instagram}`">{{
							eleve.instagram
					}}</NuxtLink>
					</li>
					<li v-if="eleve.snap">Snapchat: {{ eleve.snap }}</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<style scoped>
.liste-eleves {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
}
</style>
