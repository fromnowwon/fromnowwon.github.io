import React from 'react'
import Auth from '../../../../hoc/auth'

const LabPage = ():JSX.Element => {
	return (
		<section className="page lab-page">
			<div className="page-intro about__page-intro">
				<h2 className="page-intro__title">Laboratory</h2>
			</div>
		</section>
	)
}

export default Auth(LabPage, null);