<script lang="ts" setup>
const props = defineProps<{
	texts: String[];
	speed: number;
	reverseSpeed: number;
	pause: number;
	cursor: boolean;
}>();

const index = ref(0);
let currentText = 0;
let reverse = false;
const displayedText = ref("");
let pause = props.pause;
let paused = false;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const type = async () => {
	if (currentText === props.texts.length - 1 && reverse) {
		return;
	}

	if (pause > 0 && paused) {
		pause--;
		await sleep(10);
		await type();
		return;
	} else {
		pause = props.pause;
		paused = false;
	}

	if (reverse) {
		displayedText.value = props.texts[currentText].slice(0, index.value);
		index.value--;
		if (index.value === 0) {
			displayedText.value = "";
			reverse = false;
			currentText++;
		}
		await sleep(props.reverseSpeed);
	} else {
		index.value++;
		if (index.value === props.texts[currentText].length) {
			reverse = true;
			paused = true;
		}
		displayedText.value = props.texts[currentText].slice(0, index.value);
		await sleep(props.speed);
	}
	await sleep(10);
	type();
};
type();
</script>

<template>
	<div>
		{{ displayedText }}<span v-if="cursor" class="cursor">|</span>
	</div>
</template>

<style lang="css" scoped>
@keyframes blink {
	0% {
		opacity: 0;
	}

	50% {
		opacity: 1;
	}

	100% {
		opacity: 0;
	}
}

.cursor {
	animation: blink 1s infinite;
	font-weight: 900;
}
</style>
