import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import { auth } from '../../../_actions/user_actions'

const NavBar = ():JSX.Element => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation().pathname;
	const AuthState = useSelector<any>(state => state.user.userData) as any;

	const [mobileMenuEle, setMobileMenuEle] = useState(document.querySelector('.mobile-menu--overlay'));
	const [Position, setPosition] = useState({
    clientX: 0,
    clientY: 0,
  });
	const { clientX, clientY } = Position;
	const [Scale, setScale] = useState(false);
	const [Mode, setMode] = useState("");

	const showMenu = () => {
		setMobileMenuEle(document.querySelector('.mobile-menu--overlay'));
		if(mobileMenuEle) {
			mobileMenuEle.classList.add('show');
		}
	}

	const hideMenu = () => {
		setMobileMenuEle(document.querySelector('.mobile-menu--overlay'));
		if(mobileMenuEle) {
			mobileMenuEle.classList.remove('show');
		}
	}

	const onClickHandler = () => {
		axios.get('/api/users/logout')
		.then(response => {
			if (response.data.success) {
				navigate('/login');
			} else {
				alert("로그인에 실패하였습니다.")
			}
		}).catch((err) => {
			// 에러 넘버 확인
			console.log(err.response.status);
		})
	}

	const updatePosition = (event: { pageX: any; pageY: any; clientX: any; clientY: any; }) => {
		const { pageX, pageY, clientX, clientY } = event;

		setPosition({
			clientX,
			clientY,
		});
	};

	useEffect(() => {
		document.addEventListener("mousemove", updatePosition, false);
		document.addEventListener("mouseenter", updatePosition, false);

		// return () => {
		// 	document.removeEventListener("mousemove", updatePosition);
		// 	document.removeEventListener("mouseenter", updatePosition);
		// };
	}, [])

	const mouseOverHandler = () => {
		setScale(true);
	}

	const mouseLeaveHandler = () => {
		setScale(false);
	}

	useEffect(() => {
		dispatch(auth());
	}, [ location ])

	return (
		<header className="nav-bar">
			<div className="cursor">
				{
					Scale === true 
					?	
					location &&
					location === "/lab"
					? (
						<svg
							width={200}
							height={200}
							viewBox="0 0 50 50"
							style={{
								position: "absolute",
								zIndex: 0,
								left: clientX,
								top: clientY,
								transform: "translate(-50%, -50%)",
							}}
						>
							<circle
								cx="25"
								cy="25"
								r="8"
								fill="rgba(255,255,255,0.9)"
							/>
						</svg>
					)
					: (
						<svg
							width={200}
							height={200}
							viewBox="0 0 50 50"
							style={{
								position: "absolute",
								zIndex: 0,
								left: clientX,
								top: clientY,
								transform: "translate(-50%, -50%)",
							}}
						>
							<circle
								cx="25"
								cy="25"
								r="8"
								fill="#333"
							/>
						</svg>
					)
					: (
						<svg
							width={80}
							height={80}
							viewBox="0 0 50 50"
							style={{
								position: "absolute",
								zIndex: 9999,
								left: clientX,
								top: clientY,
								transform: "translate(-50%, -50%)",
							}}
						>
							<circle
								cx="25"
								cy="25"
								r="8"
								stroke="#333"
								strokeWidth="1"
								fill="rgba(255,255,255,0.4)"
							/>
						</svg>
					)
				}
			</div>
			<div className="nav-bar__inner flex-grid flex-grid--between flex-grid--align-center">
				<span className="mobile-menu--button">
					<button onClick={ showMenu }></button>
				</span>
				<div className="logo">
					<Link to="/">
						<h1>
							<em className="plus">+</em>
							<em className="equal">=</em>
							<span className="blind">fromnowwon 웹 개발</span>
						</h1>
					</Link>
				</div>
				<div className="menu">
					<div className="menu-inner flex-grid flex-grid--between">
						<nav className="nav flex-grid flex-grid--align-center">
							<ul className="flex-grid flex-grid--start flex-grid--align-center">
								<li>
									<Link to="/about" 
									onMouseOver={ mouseOverHandler } 
									onMouseLeave={ mouseLeaveHandler }>ABOUT</Link>
								</li>
								<li>
									<Link to="/lab"
									onMouseOver={ mouseOverHandler } 
									onMouseLeave={ mouseLeaveHandler }>LAB</Link>
								</li>
								<li>
									<a href="https://velog.io/@nemo/" target={"_blank"}
									onMouseOver={ mouseOverHandler } 
									onMouseLeave={ mouseLeaveHandler }>
										BLOG
									</a>
								</li>
								<li>
									<Link to="/contact"
									onMouseOver={ mouseOverHandler } onMouseLeave={ mouseLeaveHandler }>HELLO</Link>
								</li>
							</ul>
						</nav>
						<div className="status">
							<div className="status__log">
							{
								location && 
								location !== '/login'
								? (
									location !== '/register'
										? (
											AuthState && AuthState.isAuth
											? <span className="btn">
													<button onClick={ onClickHandler }>Sign out</button>
												</span>
											: (
												<ul className="flex-grid">
													<li className="btn-box">
														<Link to="/register" className="btn btn--dark btn--small sign-up">
														<span className="btn__text">Sign up</span>
														</Link>
													</li>
													<li className="btn-box">
														<Link to="/login" className="btn btn--small sign-in">
															<span className="btn__text">Sign in</span>
														</Link>
													</li>
												</ul>
											)
										)
										: null
									)
								: null
							}
						</div>
						</div>
					</div>
				</div>
				<div className="mobile-menu--overlay">
					<nav className="nav">
						<span className="mobile-menu__close">
							<button onClick={ hideMenu }></button>
						</span>
						<div className="logo">
							<Link to="/" onClick={ hideMenu }>
								<em className="plus">+</em>
								<em className="equal">=</em>
								<span className="blind">fromnowwon 웹 개발</span>
							</Link>
						</div>
						<div className="mobile-menu__list">
							<ul>
								<li>
									<Link to="/about" onClick={ hideMenu }>ABOUT</Link>
								</li>
								<li>
									<Link to="/lab" onClick={ hideMenu }>LAB</Link>
								</li>
								<li>
									<Link to="/contact" onClick={ hideMenu }>HELLO</Link>
								</li>
							</ul>
						</div>
						<div className="btn-cont">
							{
								location && 
								location !== '/login'
								? (
									location !== '/register'
										? (
											AuthState && AuthState.isAuth
											? <span className="btn-box">
													<button className="btn btn--small btn--dark sign-out" onClick={ () => {
														onClickHandler()
														hideMenu()
													} }><span className="btn__text">Sign out</span></button>
												</span>
											: (
												<ul className="flex-grid">
													<li className="btn-box">
														<Link to="/register" onClick={ hideMenu } className="btn btn--small sign-up">
															<span className="btn__text">Sign up</span>
														</Link>
													</li>
													<li className="btn-box">
														<Link to="/login" onClick={ hideMenu } className="btn btn--small btn--dark sign-in">
															<span className="btn__text">Sign in</span>
														</Link>
													</li>
												</ul>
											)
										)
										: null
									)
								: null
							}
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default NavBar