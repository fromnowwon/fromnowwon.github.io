import React, { useEffect }  from 'react'

const ScrollToTop = () => {
	const toTopVisible = () => {
		const $toTop = document.querySelector('.scroll-to-top');
		let scrollLocation = document.documentElement.scrollTop;

		if (scrollLocation > 30) {
			$toTop?.classList.add('active');
		} else {
			$toTop?.classList.remove('active');
		}
	}

	const toTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}

	useEffect(() => {
		window.addEventListener("scroll", toTopVisible);
		return () => {
			window.removeEventListener("scroll", toTopVisible);
		};
	}, []);

	return (
		<div className="scroll-to-top" onClick={ toTop }>
			<div className="scroll-to-top__inner">
				<button className="scroll-to-top__btn"></button>
			</div>
		</div>
	)
}

export default ScrollToTop
