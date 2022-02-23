import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container flex-grid">
				<div className="footer__block">
					<span className="logo">
						<Link to="/">
							<em className="plus">+</em>
							<em className="equal">=</em>
							<span className="blind">fromnowwon 웹 개발</span>
						</Link>
					</span>
				</div>
				<div className="footer__block">
					<div className="footer__block__wrapper flex-grid flex-grid--wrap flex-grid--dir-column">
						<p className="footer__block__title">EMAIL</p>
						<div className="footer__block__item">
							<a className="mailto" href="mailto:fromnowwon@gmail.com">fromnowwon@gmail.com</a>
						</div>
					</div>
					<div className="footer__block__wrapper flex-grid flex-grid--wrap flex-grid--dir-column">
						<p className="footer__block__title">FIND ME ALSO ON</p>
						<div className="footer__block__item">
							<a className="link" href="https://github.com/fromnowwon" target={"_blank"}>GITHUB</a>
						</div>
						<div className="footer__block__item">
							<a className="link" href="#/" onClick={e => e.preventDefault}>CODEPEN</a>
						</div>
						<div className="footer__block__item">
							<a className="link" href="https://velog.io/@nemo/" target={"_blank"}>VELOG</a>
						</div>
					</div>
				</div>
			</div>
			<div className="footer__disclaimer flex-grid flex-grid--center flex-grid--align-center">All ©rights to CW</div>
		</footer>
	)
}

export default Footer