import React from 'react'
import { Link } from 'react-router-dom';
import Auth from '../../../../hoc/auth'
import AboutSection from './Sections/AboutSection';
import LabSection from './Sections/LabSection';
import { imgURL } from '../../../Config';

const LandingPage = ():JSX.Element => {
	return (
		<div className="landing-page">
			<div className="main-visual">
				{/* <figure>
					<img src={ `${imgURL}hello-world-grey.gif` } alt="Hello World" />
				</figure> */}
				<video autoPlay muted loop playsInline width="100%" height="100%">
					<source src={`${imgURL}hello-world-grey.mp4`} type="video/mp4" />
				</video>
			</div>
			<AboutSection />
			<LabSection />
			<div className="flex-grid section-wrapper">
				<section className="section blog-section">
					<div className="section__title section-lab__title">Blog</div>
					<div className="section__contents">
						<span className="contact-ico btn-ico">
							<a href="https://velog.io/@nemo" target="_blank" className="btn btn--default btn--dark btn--arrow" rel="noreferrer">
								<img src={`${imgURL}note.png`} alt="Contact" />
							</a>
						</span>
					</div>
				</section>
				<section className="section contact-section">
					<div className="section__title section-lab__title">Say Hello</div>
					<div className="section__contents">
						<span className="contact-ico btn-ico">
							<Link to="/contact" className="btn btn--default btn--dark btn--arrow">
								<img src={`${imgURL}mail.png`} alt="Contact" />
							</Link>
						</span>
					</div>
				</section>
			</div>
		</div>
	)
}

export default Auth(LandingPage, null);