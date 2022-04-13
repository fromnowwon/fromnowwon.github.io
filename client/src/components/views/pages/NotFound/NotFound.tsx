import React from 'react'
import Auth from '../../../../hoc/auth'
import { useNavigate } from "react-router-dom";

const NotFound = (): JSX.Element => {
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	}

	return (
		<div className="page not-found">
			<div className="page-intro about__page-intro">
				<h2 className="page-intro__title">404 Not Found</h2>
			</div>
			<div className="btn-cont flex-grid flex-grid--center">
				<div className="btn-box">
					<button onClick={ goBack } className="btn btn--underline go-back">
						<span className="btn__text">
							Go back
						</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Auth(NotFound, null);
