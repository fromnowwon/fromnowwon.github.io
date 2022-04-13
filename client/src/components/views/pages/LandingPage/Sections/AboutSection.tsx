import React from 'react'
import { Link } from 'react-router-dom';
import ScrollingLogo from './ScrollingLogo'

const AboutSection = (): JSX.Element => {
	return (
		<section className="section about-section">
			<div className="btn-box">
				<Link to="/about" className="btn btn--default">
					<span className="btn__text">READ ALL ABOUT ME</span>
				</Link>
			</div>
		</section>
	)
}

export default AboutSection
