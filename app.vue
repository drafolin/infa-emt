<script lang="ts" setup>
useHead({
	title: 'INF2A',
	meta: [
		{
			name: 'description',
			content: 'Site de la classe INF2A'
		}
	]
});
</script>

<template>
	<header>
		<TheHeader />
	</header>

	<main>
		<NuxtPage />
	</main>

	<footer>
		<TheFooter />
	</footer>
</template>

<style lang="scss">
@font-face {
	font-family: 'Overpass';
	src: url("../fonts/overpass/overpass-regular-webfont.otf") format("opentype");
}

@font-face {
	font-family: "Roboto mono";
	src: url("../fonts/roboto-mono/RobotoMono-Regular.ttf") format("truetype");
}

body {
	margin: 0;
	font-weight: 500;
}

h1,
p {
	font-family: "Roboto Mono", monospace;
	margin: 0;
}

p {
	padding-bottom: 1em;
	text-align: justify;
	font-size: 14px;
	line-height: 23.8px;
}

h1 {
	font-size: 72px;
	margin-bottom: 2.75%;
	font-weight: 700;
	line-height: 72px;
}

h2 {
	font-family: 'Overpass', Helvetica, Arial, Lucida, sans-serif;
	font-weight: 600;
	font-variant: small-caps;
	color: #9f9c93;
	margin-bottom: 60px;
}

h4 {
	font-family: 'Overpass', Helvetica, Arial, Lucida, sans-serif;
	color: #C2320A;
	font-weight: 600;
	margin-bottom: 10px;
}

.section {
	&:first-child {
		padding-top: 0;
	}

	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 54px 0;
}

.row {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 80%;
	max-width: 1080px;
	margin: auto;
	padding: 27px 0;
}

.row:not(.row-1) {
	justify-content: space-between;

	.column:not(:last-child) {
		margin-right: 5.5%
	}
}

.column {
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.row-1 {
	.column {
		width: 100%;
	}
}

.row-1_2 {
	.column {
		width: 47.5%;
	}
}

.row-3_5 {
	.column {
		&:first-child {
			width: 57.8%;
		}

		&:last-child {
			width: 36.7%;
		}
	}
}

.hero-fullscreen {
	p {
		padding-bottom: 0;
		margin: 0;
		font-family: "Roboto Mono", monospace;
		font-size: 17px;
		padding-left: 10px;
	}
}

.blurb {
	background-color: #F5F5F5;
	border-radius: 7px 7px 7px 7px;
	overflow: hidden;
	padding-top: 30px !important;
	padding-right: 30px !important;
	padding-bottom: 30px !important;
	padding-left: 30px !important;

	img {
		height: auto;
		max-width: 100%;
	}
}
</style>
