import React from 'react'
import Auth from '../../../../hoc/auth'
import Typing from '../../commons/TypingOnce';
import { imgURL } from '../../../Config';

const AboutPage = (): JSX.Element => {
	return (
		<section className="page about-page">
			<div className="page-intro about__page-intro">
				<h2 className="page-intro__title">
					<Typing words={ ["About"] } />
				</h2>
				<p className="page-intro__text">안녕하세요, 반갑습니다.</p>
			</div>
			<div className="visual">
				<figure>
					<img src={ `${imgURL}coding-v2.gif` } />
				</figure>
			</div>
		</section>
	)
}

export default Auth(AboutPage, null);