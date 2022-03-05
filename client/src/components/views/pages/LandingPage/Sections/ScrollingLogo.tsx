import React, { useEffect, useState } from "react";
import { imgURL } from '../../../../Config';

const ScrollingLogo = ():JSX.Element => {
	const [logos, setLogos] = useState([
		`react-logo.png`,
		`html5-logo.png`,
		`css3-logo.png`,
		`javascript-logo.png`,
		`typescript-logo.png`,
		`sass-logo.png`,
		`nodejs-logo.png`,
		`python-logo.png`,
		`bootstrap-logo.png`,
		`react-logo.png`,
		`html5-logo.png`,
		`css3-logo.png`,
		`javascript-logo.png`,
		`typescript-logo.png`,
		`sass-logo.png`,
		`nodejs-logo.png`,
		`python-logo.png`,
		`bootstrap-logo.png`
	]);
	
	let scrollAnimation: number;
	let speed = 0;
	let gap = 60;
	let total = 0;

	// 로고 위치 잡기
	const logosPos = () => {
		const $logos = document.querySelectorAll<HTMLElement>('.logo-box');
		const logosLength = $logos.length;

		for (let i = 0; i < logosLength; i++) {
			let logo = $logos[i];
			
			// 첫번째 요소
			if (i === 0) {
				logo.style.transform = "translate3D(" + total + "px, -50%, 0)";
			}
			
			// 나머지 요소
			if (i > 0) {
				let prev = $logos[i - 1];
				let prevWidth = prev.clientWidth + gap;
				total += prevWidth;
				logo.style.transform = "translate3D(" + total + "px, -50%, 0)";
			}
		}

	}

	const scroll = () => {
		const $wrapper = document.querySelector<HTMLElement>('.scrolling-logo__wrapper');
		const $logos = document.querySelectorAll<HTMLElement>('.logo-box');
		const logosLength = $logos.length;
		speed -= 1;
		
		if ($logos) {
			// console.log('rolling..')
			for (let i = 0; i < $logos.length; i++) {
				let logo = $logos[i];
				let distLeft = logo.getBoundingClientRect().left;
	
				// 화면에서 보이지 않게 됐을 때
				if (distLeft < 0 - logo.clientWidth) {
					let prevIdx = i - 1;

					// 첫번째 요소일 때
					if (prevIdx < 0) {
						prevIdx = logosLength - 1;
					}
					
					// 앞 인덱스 요소의 뒤로 가기
					let prevPos = $logos[prevIdx].style.transform.split(/[()]/)[1];
					let prevX = prevPos.split(",")[0];
					let newX = parseInt(prevX) + $logos[prevIdx].clientWidth + gap;
										
					logo.style.transform = `translate3D(${newX}px, -50%, 0)`;
				}
			}
		}

		if ($wrapper) {
			$wrapper.style.transform = `translate3D(${speed}px, 0, 0)`;
		}
		scrollAnimation = requestAnimationFrame(scroll);
	}

	const resetScroll = () => {
		cancelAnimationFrame(scrollAnimation);
	}

	useEffect(() => {
		scroll();
		logosPos();

		return () => {
			resetScroll();
		}
	}, []);

	return (
		<div className="scrolling-logo">
			<div className="scrolling-logo__wrapper flex-grid flex-grid--nowrap flex-grid--start">
				{
					logos && logos.map((e, i) => {
						return (
							<div className="logo-box" key={i}>
								<img src={ imgURL + logos[i] } alt="stack-logo"/>
							</div>
						)
					})
				}
			</div>
		</div>
	);
};

export default ScrollingLogo;
