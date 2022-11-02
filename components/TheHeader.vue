<template>
	<div>
		<nav>
			<NuxtLink to="/"><img height="40px" src="~/assets/icons/infa.svg" alt="Logo de la classe" /></NuxtLink>
			<ul>
				<li>
					<NuxtLink to="/">Accueil</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/calculateurs">Calculateurs</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/balai">Balai</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/liens">Liens utiles</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/contact">Nous, contact et autres</NuxtLink>
				</li>
			</ul>
		</nav>
	</div>
</template>

<style lang="scss" scoped>
$monospace :"Roboto Mono",
monospace;

div {
	nav {
		height: 80px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 80%;
		max-width: 1080px;
		margin: auto;

		>a {
			display: flex;
			align-items: center;

			img {
				height: 40px;
			}
		}

		ul {
			display: flex;
			flex-direction: row;
			align-items: center;
			list-style: none;
			padding: 0;
			margin: 0;

			li {
				margin: 0 10px;

				a {
					color: black;
					text-decoration: none;
					font-family: $monospace;
					font-size: 14px;
					letter-spacing: -.5px;
				}
			}
		}
	}
}
</style>
