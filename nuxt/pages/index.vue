<script lang="ts" setup>
</script>

<template>
	<div>
		<div class="section hero-fullscreen">
			<div class="row row-1">
				<div class="column">
					<h1>
						<TypingText :speed="50" :reverseSpeed="10" :pause="50" cursor
							:texts="['Bienvenue chez les INF2a !', 'Nous sommes ravis de vous revoir...', 'Bienvenue !']" />
					</h1>
					<p>EMT – Informatique – 2900 Porrentruy</p>
				</div>
			</div>
		</div>
		<div class="section">
			<div class="row row-1">
				<div class="column">
					<h2>Présentation</h2>
				</div>
			</div>
			<div class="row row-3_5">
				<div class="column">
					<p>L’Ecole des Métiers Techniques offre des places d’apprentissage à plein temps.
						Elle dispense la formation pratique professionnelle en atelier et les cours théoriques
						liés à la formation spécifique sont dispensés à l’Ecole Professionnelle Technique.
						Les futurs apprentis signeront un contrat d’apprentissage avec l’Ecole des Métiers Techniques
						qui joue donc un rôle d’employeur.</p>
					<p>L’Ecole des Métiers Techniques prépare les apprentis à l’obtention d’une attestation fédérale de
						formation professionnelle (AFP) de 2 ans ou d’un certificat fédéral de capacité (CFC) de 3 ou 4 ans.</p>
				</div>
				<div class="column">
					<img src="@/assets/01_CEJEF-DIVTEC_Porrentruy_Burri-P_facade_sud_M.jpg" alt="Facade sud du bâtiment D">
				</div>
			</div>
		</div>
		<div class="section">
			<div class="row row-1">
				<div class="column">
					<h2>Situation</h2>
				</div>
			</div>
			<div class="row row-1_2">
				<div class="column">
					<div class="blurb">
						<img src="@/assets/porrentruy.jpg" alt="La ville de Porrentruy">
						<h4>PORRENTRUY</h4>
						<p>
							<strong>Porrentruy</strong> est une commune suisse située dans le canton du Jura dans la région de
							l’Ajoie. Elle est le chef-lieu du district de Porrentruy. Elle est la troisième commune du canton du Jura
							par sa population.
						</p>
					</div>
				</div>
				<div class="column">
					<div class="blurb">
						<img src="@/assets/juraPaysage.jpg" alt="Le canton du Jura">
						<h4>JURA</h4>
						<p>
							<strong>Le canton du Jura</strong> (JU), officiellement la <strong>république et canton du Jura</strong>,
							est l’un des 26 cantons de la Suisse.
							Il est composé de trois districts et son chef-lieu est Delémont. Il est le plus jeune canton de suisse.
						</p>
					</div>
				</div>
			</div>
			<div class="row row-1">
				<div class="column">

				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.section:nth-child(1) {
	background-blend-mode: color;
	background-image: url("../assets/CREATE1.png"), linear-gradient(69deg, #3a3a3a 0%, #75726b 17%, #9f9c93 37%, rgba(159, 156, 147, 0.76) 59%, rgba(245, 245, 245, 0.5) 88%);
	min-height: 651px;

	.row {
		height: 100%;
		margin-top: 100px;
	}

	.column {
		height: 100%;
		color: white;
	}
}

.section:nth-child(2) {
	padding-top: 60px;

	.row:first-child {
		padding-top: 45px;
	}

	.row:nth-child(2) {
		.column:first-child {
			padding-right: 36px;
		}

		.column:last-child img {
			min-height: 223.8px;
			position: relative;
			height: auto;
			max-width: 100%;
			width: 1200px;
			aspect-ratio: auto 1200 / 720;
			transform: translateX(33px) translateY(0px);
			box-shadow: 0px 2px 25px 0px rgb(0 0 0 / 30%);
		}
	}

	.row:last-child {
		padding-bottom: 119px;
	}
}

.section:nth-child(3) {
	background-color: #9F9C93;
}
</style>
