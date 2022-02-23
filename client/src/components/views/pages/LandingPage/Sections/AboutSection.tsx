import React from 'react'
import { Link } from 'react-router-dom';
import ScrollingLogo from './ScrollingLogo'

const AboutSection = (): JSX.Element => {
	return (
		<section className="section about-section">
			<div className="section__title section-about__title">About</div>
			<div className="section__contents">
				<p className="heading-text">Web Development</p>
				<ScrollingLogo />
			</div>
			<div className="btn-box">
				<Link to="/about" className="btn btn--default">
					<span className="btn__text">READ ALL ABOUT ME</span>
				</Link>
			</div>
		</section>
	)
}

export default AboutSection
