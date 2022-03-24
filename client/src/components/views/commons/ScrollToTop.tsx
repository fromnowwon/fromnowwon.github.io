import React, { useEffect }  from 'react'
import { HashLink } from 'react-router-hash-link';

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

	useEffect(() => {
		window.addEventListener("scroll", toTopVisible);
		return () => {
			window.removeEventListener("scroll", toTopVisible);
		};
	}, []);

	return (
		<div className="scroll-to-top">
			<div className="scroll-to-top__inner">
				<HashLink smooth to="#top" className="scroll-to-top__btn" />
			</div>
		</div>
	)
}

export default ScrollToTop
