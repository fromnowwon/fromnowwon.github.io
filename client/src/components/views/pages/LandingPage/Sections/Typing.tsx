import React, { useEffect, useState } from 'react'

const Typing = (): JSX.Element => {
	const [words, setWords] = useState<string[]>([]);

	const $message = document.querySelector('.message');
	
	const LETTER_TYPE_DELAY = 75;
	const WORD_STAY_DELAY = 2000;
	const DIRECTION_FORWARDS = 0;
	const DIRECTION_BACKWARDS = 1;

	let direction = DIRECTION_FORWARDS;
	let wordIndex = 0;
	let letterIndex = 0;
	let wordTypeInterval: ReturnType<typeof setInterval>;

	const startTyping = () => {
		if(words) {
			wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
		}
	}

	const typeLetter = () => {
		// 단어 개수 만큼 진행
		if (words && words.length > 0) {
			const word = words[wordIndex];

			// 정방향
			if(direction === DIRECTION_FORWARDS) {
				letterIndex++;
				
				if (letterIndex === word.length) {
					direction = DIRECTION_BACKWARDS;
					clearInterval(wordTypeInterval);
					setTimeout(startTyping, WORD_STAY_DELAY);
				}
			} // 역방향
			 else if(direction === DIRECTION_BACKWARDS) {
				letterIndex--;

				if (letterIndex === 0) {
					nextWord();
				}
			}

			const textToType = word.substring(0, letterIndex);
			//H
			//HE
			//HEL
			//HELL
			//HELLO

			if($message) {
				$message.textContent = textToType;
			}
		}
	}

	
	const nextWord = () => {
		letterIndex++;
		wordIndex++;
		direction = DIRECTION_FORWARDS;

		// 마지막 단어, 첫 단어로
		if (wordIndex === words.length) {
			wordIndex = 0;
		}
	}

	useEffect(() => {
		setWords(["HELLO, WORLD!", `<h1>HELLO, WORLD!</h1>`]);
	},[])

	useEffect(() => {
		startTyping();
	},[ words ])

	return (
		<div className="typing-text">
			<p className="message"></p>
		</div>
	)
}

export default Typing