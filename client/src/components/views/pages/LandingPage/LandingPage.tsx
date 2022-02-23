import React from 'react'
import { Link } from 'react-router-dom';
import Auth from '../../../../hoc/auth'
import AboutSection from './Sections/AboutSection';
import MainVisual from './Sections/MainVisual';
import Typing from './Sections/Typing';
import LabSection from './Sections/LabSection';
import { imgURL } from '../../../Config';

const LandingPage = ():JSX.Element => {
	return (
		<div className="landing-page">
			<Typing />
			<MainVisual />
			<AboutSection />
			<LabSection />
			<div className="flex-grid section-wrapper">
				<section className="section blog-section">
					<div className="section__title section-lab__title">Blog</div>
					<div className="section__contents">
						<span className="contact-ico btn-ico">
							<a href="https://velog.io/@nemo" target="_blank" className="btn btn--default btn--dark btn--arrow">
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