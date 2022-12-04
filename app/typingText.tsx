"use client";
import { useEffect, useState } from "react";
import "./typingText.scss";

export interface typingTextProps {
	texts: String[];
	speed: number;
	reverseSpeed: number;
	pause: number;
	cursor: boolean;
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const TypingText = (props: typingTextProps) => {
	const [displayedText, setDisplayedText] = useState("");

	useEffect(() => {
		(async () => {
			let index = 0;
			let currentText = 0;
			let reverse = false;
			let pause = props.pause;
			let paused = false;

			while (true) {
				console.log("cycle");
				if (currentText === props.texts.length - 1 && reverse) {
					return;
				}

				if (pause > 0 && paused) {
					pause--;
					await sleep(10);
					continue;
				} else {
					pause = props.pause;
					paused = false;
				}

				if (reverse) {
					setDisplayedText(props.texts[currentText].slice(0, index));
					index--;
					if (index === 0) {
						setDisplayedText("");
						reverse = false;
						currentText++;
					}
					await sleep(props.reverseSpeed);
				} else {
					index++;
					if (index === props.texts[currentText].length) {
						reverse = true;
						paused = true;
					}
					setDisplayedText(props.texts[currentText].slice(0, index));
					await sleep(props.speed);
				}
				await sleep(10);
			}
		})();
	}, [props]);
	return (
		<>
			<div className="typing-text">
				{displayedText}<span v-if="cursor" className="cursor">|</span>
			</div>
		</>
	);
};

export default TypingText;
