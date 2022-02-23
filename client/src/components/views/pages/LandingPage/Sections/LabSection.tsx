import React from 'react'
import { Link } from 'react-router-dom'

const LabSection = () => {
	return (
		<section className="section lab-section">
			<div className="section__title section-about__title section__title--light">LAB</div>
			<div className="section__contents">
				<div className="lab">

				</div>
			</div>
			<div className="btn-box">
				<Link to="/lab" className="btn btn--dark btn--default">
					<span className="btn__text">SEE MORE</span>
				</Link>
			</div>
		</section>
	)
}

export default LabSection