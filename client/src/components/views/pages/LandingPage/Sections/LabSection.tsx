import React from 'react'
import { Link } from 'react-router-dom'

const LabSection = () => {
	return (
		<section className="section lab-section">
			<div className="section__title section-about__title section__title--light">LAB</div>
			<div className="section__contents">
				<div className="lab-list">
					<div className="lab-list__item bbc">
						<Link to="/lab" className="flex-grid flex-grid--center flex-grid--align-center">
							<span className="item-text">코로나19가 바꿀 사무실의 미래</span>
						</Link>
						<span className="item-ico"></span>
					</div>
					<div className="lab-list__item movieApp">
						<Link to="/lab" className="flex-grid flex-grid--center flex-grid--align-center">
							<span className="item-text">Movie App</span>
						</Link>
						<span className="item-ico"></span>
					</div>
					<div className="lab-list__item movieApp">
						<Link to="/lab" className="flex-grid flex-grid--center flex-grid--align-center">
							<span className="item-text">Map Search App</span>
						</Link>
						<span className="item-ico"></span>
					</div>
					<div className="lab-list__item coinTracker">
						<Link to="/lab" className="flex-grid flex-grid--center flex-grid--align-center">
							<span className="item-text">Coin Tracker</span>
						</Link>
						<span className="item-ico"></span>
					</div>
					<div className="lab-list__item see-more">
						<Link to="/lab" className="flex-grid flex-grid--center flex-grid--align-center">
							<span className="item-text">SEE MORE</span>
						</Link>
						<span className="item-arrow item-arrow--dark"></span>
					</div>
				</div>
			</div>
			{/* <div className="btn-box">
				<Link to="/lab" className="btn btn--dark btn--default">
					<span className="btn__text">SEE MORE</span>
				</Link>
			</div> */}
		</section>
	)
}

export default LabSection