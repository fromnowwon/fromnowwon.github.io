import React from 'react'
import Auth from '../../../../hoc/auth'

const AboutPage = (): JSX.Element => {
	return (
		<section className="page about-page">
			<div className="page-intro about__page-intro">
				<h2 className="page-intro__title">ABOUT</h2>
				<p className="page-intro__text">안녕하세요, 반갑습니다.</p>
			</div>
		</section>
	)
}

export default Auth(AboutPage, null);