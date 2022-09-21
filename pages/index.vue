<script lang="ts" setup>
</script>

<template>
	<div>
		<div class="section hero-fullscreen">
			<div class="row">
				<div class="column">
					<h1>
						<TypingText :speed="50" :reverseSpeed="10" :pause="50" cursor
							:texts="['Bienvenue chez les INF2a !', 'Nous sommes ravis de vous revoir...', 'Bienvenue !']" />
					</h1>
					<p>EMT – Informatique – 2900 Porrentruy</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.section:nth-child(1) {
	background-blend-mode: color;
	background-image: url("../assets/CREATE1.png"), linear-gradient(69deg, #3a3a3a 0%, #75726b 17%, #9f9c93 37%, rgba(159, 156, 147, 0.76) 59%, rgba(245, 245, 245, 0.5) 88%);
	min-height: 651px;
}

.section:nth-child(1) .row {
	height: 100%;
	margin-top: 100px;
}

.section:nth-child(1) .column {
	height: 100%;
	color: white;
}
</style>
