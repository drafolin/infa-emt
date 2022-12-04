"use client";
import { useState } from "react";

export interface typingTextProps {
	texts: String[];
	speed: number;
	reverseSpeed: number;
	pause: number;
	cursor: boolean;
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const TypingText = (props: typingTextProps) => {
	const [index, setIndex] = useState(0);
	let currentText = 0;
	let reverse = false;
	const [displayedText, setDisplayedText] = useState("");
	let pause = props.pause;
	let paused = false;

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
			setDisplayedText(props.texts[currentText].slice(0, index));
			setIndex(index - 1);
			if (index === 0) {
				setDisplayedText("");
				reverse = false;
				currentText++;
			}
			await sleep(props.reverseSpeed);
		} else {
			setIndex(index + 1);
			if (index === props.texts[currentText].length) {
				reverse = true;
				paused = true;
			}
			setDisplayedText(props.texts[currentText].slice(0, index));
			await sleep(props.speed);
		}
		await sleep(10);
		type();
	};
	type();


	return (
		<>
			<div>
				{displayedText}<span v-if="cursor" className="cursor">|</span>
			</div>
		</>
	);
};

export default TypingText;

/*<style lang="css" scoped>
	@keyframes blink {
		0 % {
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
</style>;
*/
