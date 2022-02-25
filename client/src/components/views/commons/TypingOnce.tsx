import React, { useEffect, useState } from 'react'

const Typing = ({ words } : any ): JSX.Element => {
	const [MessageEle, setMessageEle] = useState(document.querySelector('.message'));
	
	const LETTER_TYPE_DELAY = 75;
	const DIRECTION_FORWARDS = 0;

	let direction = DIRECTION_FORWARDS;
	let wordIndex = 0;
	let letterIndex = 0;
	let wordTypeInterval: ReturnType<typeof setInterval>;

	const startTyping = () => {
		if(MessageEle) {
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
				
				if (letterIndex === 0) {
					nextWord();
				}
			}

			const textToType = word.substring(0, letterIndex);

			if(MessageEle) {
				MessageEle.textContent = textToType;
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
		setMessageEle(document.querySelector('.message'));
		startTyping();
	},[ MessageEle ])

	return (
		<div className="typing-text">
			<p className="message"></p>
		</div>
	)
}

export default Typing