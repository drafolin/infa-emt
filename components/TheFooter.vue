<template>
	<div class="root">
		<p>
			&copy; 2022 Chloé Renaud et Odin Beuchat - Tous droits réservés
		</p>
		<div class="resources">
			<div>
				<span>
					Made with </span>
				<NuxtLink to="https://vuejs.org/">
					<img src="/assets/icons/vuejs.svg" />
				</NuxtLink>
				<span>, </span>
				<NuxtLink to="https://v3.nuxtjs.org/">
					<img src="/assets/icons/nuxt.svg" />
				</NuxtLink>
				<span> and </span>
				<NuxtLink to="https://www.bag.admin.ch/bag/fr/home.html">
					<img src="/assets/icons/heart.png" />
				</NuxtLink>
				<span>.</span>
			</div>
			<div>
				<span>Powered by </span>
				<NuxtLink to="https://vercel.com/">
					<img src="/assets/icons/vercel-icon-dark.svg" />
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.root {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100px;
	width: 100%;
	background-color: #f5f5f5;
	color: #333;
	font-size: 0.8em;
	padding: 0 20px;
	margin: 0;

	.resources {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0;
		padding: 0;
		font-family: "Roboto Mono", monospace;
		flex-direction: column;

		>div {
			display: flex;
			align-items: baseline;
			justify-content: center;
			margin: 0;
			padding: 0;
			font-family: "Roboto Mono", monospace;

			img {
				margin: 0 5px;
			}

			span,
			img {
				height: 1em;
			}
		}
	}
}
</style>
